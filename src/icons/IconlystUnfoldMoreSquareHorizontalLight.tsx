import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnfoldMoreSquareHorizontalLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.543 20.222H6.46C3.711 20.222 2 18.281 2 15.533v-7.12c0-2.747 1.712-4.688 4.463-4.688h11.08c2.751 0 4.462 1.941 4.462 4.689v7.12c0 2.747-1.72 4.688-4.461 4.688"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.977 14.97 3-3-3-3M9.977 14.97l-3-3 3-3"
    />
  </Svg>
);
export default IconlystUnfoldMoreSquareHorizontalLight;
