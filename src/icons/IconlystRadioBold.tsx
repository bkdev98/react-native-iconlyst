import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioBold = ({
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
      d="M8.514 15.006a.705.705 0 1 0 .001 1.411.705.705 0 0 0 0-1.41"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.373 12.189H6.627a.75.75 0 0 1 0-1.5h10.746a.75.75 0 0 1 0 1.5m.318 4.76a.75.75 0 0 1-1.5 0v-2.473a.75.75 0 0 1 1.5 0zm-2.906 0a.75.75 0 0 1-1.5 0v-2.473a.75.75 0 0 1 1.5 0zm-6.271.969a2.21 2.21 0 0 1-2.205-2.206c0-1.216.989-2.205 2.205-2.205s2.206.989 2.206 2.205-.99 2.206-2.206 2.206m8.017-11.002H8.545l3.908-3.18a.75.75 0 0 0 .108-1.054.75.75 0 0 0-1.055-.11l-5.627 4.58C3.665 7.775 2.25 9.7 2.25 12.362v3.79c0 3.257 2.097 5.445 5.218 5.445h9.062c3.123 0 5.22-2.188 5.22-5.445v-3.79c0-3.257-2.097-5.446-5.219-5.446"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadioBold;
