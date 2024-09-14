import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutHorizontalLight = ({
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
      d="M6.461 3.725h11.082c2.75 0 4.461 1.941 4.461 4.689v7.12c0 2.747-1.711 4.688-4.462 4.688H6.46C3.711 20.222 2 18.281 2 15.533v-7.12c0-2.747 1.719-4.688 4.461-4.688M6 12V8m0 0h4M6 8l4 4M18 12v4m0 0h-4m4 0-4-4"
    />
  </Svg>
);
export default IconlystFullOutHorizontalLight;