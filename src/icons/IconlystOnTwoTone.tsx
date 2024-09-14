import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnTwoTone = ({
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
      d="M6.461 3.725h11.082c2.75 0 4.461 1.941 4.461 4.689v7.12c0 2.747-1.711 4.688-4.462 4.688H6.46C3.711 20.222 2 18.281 2 15.533v-7.12c0-2.746 1.719-4.688 4.461-4.688"
      opacity={0.4}
    />
    <Ellipse
      cx={8.956}
      cy={12}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.122}
      ry={2.382}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.76 14.26V9.583l3.458 4.58v-4.58"
    />
  </Svg>
);
export default IconlystOnTwoTone;
