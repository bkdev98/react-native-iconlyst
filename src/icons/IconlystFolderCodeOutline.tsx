import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderCodeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.872 4.886C4.3 5.604 4 6.731 4 8.34v7.314c0 1.53.449 2.653 1.19 3.393.743.74 1.87 1.19 3.405 1.19h7.296c1.53 0 2.654-.449 3.394-1.19s1.189-1.863 1.189-3.393v-.005l.026-4.651v-.002c0-1.647-.305-2.71-.862-3.362-.534-.625-1.43-1.02-2.993-1.02h-2.656a2.9 2.9 0 0 1-2.309-1.157l-.856-1.137v-.002a1.39 1.39 0 0 0-1.111-.555H7.838c-1.526 0-2.422.442-2.966 1.124m-1.173-.934c.911-1.144 2.309-1.69 4.139-1.69h1.875c.909 0 1.765.427 2.31 1.155l.856 1.137a1.4 1.4 0 0 0 1.114.558h2.652c1.8 0 3.206.46 4.134 1.547C21.684 7.719 22 9.222 22 10.997V11l-.026 4.652v.002c0 1.823-.541 3.365-1.628 4.452-1.087 1.088-2.63 1.628-4.455 1.628H8.595c-1.829 0-3.375-.54-4.464-1.627S2.5 17.478 2.5 15.653V8.339c0-1.743.316-3.28 1.199-4.387"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.864 10.462a.75.75 0 0 1 0 1.06l-1.613 1.613 1.646 1.646a.75.75 0 0 1-1.06 1.061L7.66 13.666a.75.75 0 0 1 0-1.06l2.143-2.144a.75.75 0 0 1 1.061 0M13.638 10.462a.75.75 0 0 1 1.06 0l2.143 2.143a.75.75 0 0 1 0 1.06l-2.176 2.177a.75.75 0 0 1-1.06-1.06l1.645-1.647-1.613-1.612a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderCodeOutline;
