import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube6Outline = ({
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
      d="M6.825 3.365a3.8 3.8 0 0 1 2.69-1.115h9.68A2.805 2.805 0 0 1 22 5.055v9.68c0 1.01-.401 1.977-1.115 2.69l-3.21 3.21a3.8 3.8 0 0 1-2.69 1.115h-9.68A2.805 2.805 0 0 1 2.5 18.945v-9.68c0-1.01.401-1.977 1.115-2.69zm2.69.385c-.61 0-1.197.243-1.63.675l-3.21 3.21A2.3 2.3 0 0 0 4 9.265v9.68c0 .72.584 1.305 1.305 1.305h9.68c.61 0 1.197-.243 1.63-.675l3.21-3.21a2.3 2.3 0 0 0 .675-1.63v-9.68c0-.72-.584-1.305-1.305-1.305z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.74 18.065a.75.75 0 0 1 .11 1.055l-1.42 1.75a.75.75 0 0 1-1.165-.945l1.42-1.75a.75.75 0 0 1 1.055-.11M8.248 2.527a.75.75 0 0 1 .75.75v1.91a.75.75 0 1 1-1.5 0v-1.91a.75.75 0 0 1 .75-.75M8.25 6.78a.75.75 0 0 1 .75.75v2.708a.75.75 0 0 1-1.5 0V7.53a.75.75 0 0 1 .75-.75M8.25 12.25A.75.75 0 0 1 9 13v1.25h1.25a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 7.5 15v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.724 14.419a.75.75 0 0 1 .107 1.055l-1.263 1.55a.75.75 0 1 1-1.163-.948l1.264-1.55a.75.75 0 0 1 1.055-.107M17.948 14.997a.75.75 0 0 1 .75-.75h2.54a.75.75 0 1 1 0 1.5h-2.54a.75.75 0 0 1-.75-.75m-5.82.003a.75.75 0 0 1 .75-.75h3.159a.75.75 0 0 1 0 1.5h-3.158a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.131 3.03a.75.75 0 0 1 .055 1.06l-4.31 4.78a.35.35 0 0 0-.087.217v11.73a.75.75 0 0 1-1.5 0V9.087a1.85 1.85 0 0 1 .463-1.212l4.32-4.79a.75.75 0 0 1 1.06-.055"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.559 8.688a.75.75 0 0 1 .75-.75h12.73a.75.75 0 0 1 0 1.5H3.309a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube6Outline;
