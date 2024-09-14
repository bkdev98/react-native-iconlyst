const fs = require("fs");
const path = require("path");
const readline = require("readline");
const Case = require("case");
const { transform } = require("@svgr/core");

const ICONS_FILE = path.join(__dirname, "../icons.json");
const RAW_DIR = path.join(__dirname, "../src/icons");
const TARGET_DIR = path.join(__dirname, "../src/iconlyst");

const svgrOptions = {
  icon: true,
  native: true,
  typescript: true,
  titleProp: true,
  replaceAttrValues: { '#000': '{props.color}', 'black': '{props.color}' },
  svgProps: {
    width: '{props.size}',
    height: '{props.size}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
};

function generateComponentName(icon) {
  return `Iconlyst${Case.pascal(`${icon.name}${icon.style.name}${icon.icon_type.id !== 1 ? icon.icon_type.name : ''}`)}`;
}

function generateMainIcon(componentName) {
  const componentCode = `import React, { useContext } from 'react'
import { type IconlystProps, IconlystContext } from '../lib'

import IconComponent from '../icons/${componentName}'

function ${componentName}({ color, size, style, mirrored, ...props }: IconlystProps) {
  const {
    color: contextColor = 'currentColor',
    size: contextSize = 24,
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconlystContext)

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={[
        contextStyle,
        style,
        {
          ...(mirroredValue && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
      {...props}
    />
  )
}

export default ${componentName}
`;

  const componentPath = path.join(TARGET_DIR, `${componentName}.tsx`);
  fs.writeFileSync(componentPath, componentCode);
}

async function generateIcons() {
  // check if icons.json exists
  if (!fs.existsSync(ICONS_FILE)) {
    console.error("icons.json does not exist, try 'pnpm crawl' first");
    process.exit(1);
  }

  // read icons.json
  console.log("⬇️  Reading icons.json...");
  const icons = JSON.parse(fs.readFileSync(ICONS_FILE, "utf8"));

  // create target directory if it doesn't exist
  if (!fs.existsSync(RAW_DIR)) {
    fs.mkdirSync(RAW_DIR);
  }
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR);
  }

  // generate icons
  console.log("⬇️  Generating icons...");
  let count = 0;
  await Promise.all(icons.map(async (icon) => {
    const componentName = generateComponentName(icon);
    const componentPath = path.join(RAW_DIR, `${componentName}.tsx`);
    const svgContent = icon.svg_content;
    const tsCode = await transform(svgContent, svgrOptions, { componentName });
    fs.writeFileSync(componentPath, tsCode);
    generateMainIcon(componentName);
    console.log(`✅ Generated ${componentName}.tsx`);
    count++;
  }))
  console.log(`☑️  Generated ${count} icons`);
}

generateIcons();
