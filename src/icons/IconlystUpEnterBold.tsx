import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpEnterBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M3.15 8.77V6.969a4.355 4.355 0 0 1 4.35-4.35h9a4.354 4.354 0 0 1 4.35 4.35v1.8a.75.75 0 0 1-1.5 0v-1.8a2.85 2.85 0 0 0-2.85-2.85h-9a2.85 2.85 0 0 0-2.85 2.85v1.8a.75.75 0 0 1-1.5 0"
    />
    <Path
      fill={props.color}
      d="m12.531 6.44 2.28 2.28a.748.748 0 0 1-.448 1.276v.006H12.75v3.706h4.851c1.654 0 3 1.346 3 3v2.17c0 1.655-1.346 3-3 3H6.4c-1.654 0-3-1.345-3-3v-2.17c0-1.654 1.346-3 3-3h4.85v-3.706H9.755V10a.75.75 0 0 1-.565-1.28l2.28-2.28a.75.75 0 0 1 1.061 0"
    />
  </Svg>
);
export default IconlystUpEnterBold;
