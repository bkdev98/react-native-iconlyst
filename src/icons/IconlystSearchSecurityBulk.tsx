import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSecurityBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.992 19.794-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M14.545 11.438c0-.64.01-1.08.02-1.38v-.036c.01-.713.014-.99-.35-1.344-.38-.38-2.45-1.07-2.92-1.07-.48 0-2.54.69-2.93 1.07-.365.354-.36.63-.351 1.344v.036c.01.31.02.74.02 1.38 0 2.58 2.812 3.496 3.03 3.567l.01.003a.8.8 0 0 0 .43 0c.13-.04 3.04-.96 3.04-3.57m-1.47-1.73c-.39-.17-1.54-.57-1.82-.6-.21.03-1.29.4-1.74.61v.31c.01.31.02.76.02 1.41 0 1.2 1.24 1.84 1.75 2.05.52-.21 1.76-.86 1.76-2.05 0-.66.01-1.1.02-1.41 0-.14 0-.24.01-.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSecurityBulk;
