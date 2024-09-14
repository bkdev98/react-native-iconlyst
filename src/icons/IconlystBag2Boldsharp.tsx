import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Boldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.62 7.515h-1.55a3.997 3.997 0 0 0-7.64 0H6.88a5.51 5.51 0 0 1 5.37-4.32 5.51 5.51 0 0 1 5.37 4.32M22.04 7.515l-1.14 14.36H3.6L2.46 7.515h4.42c-.09.38-.13.77-.13 1.18v1.86h1.5v-1.86c0-.41.06-.8.18-1.18h7.64c.12.38.18.77.18 1.18v1.86h1.5v-1.86c0-.41-.04-.8-.13-1.18z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Boldsharp;
