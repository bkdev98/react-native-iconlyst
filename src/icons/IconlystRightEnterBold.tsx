import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightEnterBold = ({
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
      d="M15.48 3.4h1.8a4.355 4.355 0 0 1 4.35 4.35v9a4.354 4.354 0 0 1-4.35 4.35h-1.8a.75.75 0 0 1 0-1.5h1.8a2.85 2.85 0 0 0 2.85-2.85v-9a2.85 2.85 0 0 0-2.85-2.85h-1.8a.75.75 0 0 1 0-1.5"
    />
    <Path
      fill={props.color}
      d="m17.81 12.781-2.28 2.28a.748.748 0 0 1-1.277-.448h-.006V13h-3.706v4.851c0 1.654-1.346 3-3 3h-2.17c-1.655 0-3-1.346-3-3v-11.2c0-1.655 1.345-3 3-3h2.17c1.654 0 3 1.345 3 3v4.85h3.706v-1.495h.003a.75.75 0 0 1 1.28-.566l2.28 2.28a.75.75 0 0 1 0 1.061"
    />
  </Svg>
);
export default IconlystRightEnterBold;
