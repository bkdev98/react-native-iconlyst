import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAngularTwoTone = ({
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
      d="m15.25 15.357-3.244-7.584-3.256 7.584m.728-1.696h5.046"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.06 5.614-6.224-2.47a2.05 2.05 0 0 0-1.498-.005L4.954 5.617A2.05 2.05 0 0 0 3.662 7.78l1.053 8.493a2.05 2.05 0 0 0 1.047 1.544l5.33 2.93c.62.34 1.371.337 1.988-.008l5.215-2.916a2.05 2.05 0 0 0 1.035-1.548L20.34 7.76a2.05 2.05 0 0 0-1.28-2.146"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAngularTwoTone;
