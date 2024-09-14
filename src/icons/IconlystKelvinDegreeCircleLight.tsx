import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.274 4.378q-.081-.091-.168-.178a4.096 4.096 0 1 0-5.614 5.96 8.478 8.478 0 1 0 5.782-5.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.32 8.096v.048m.188-.038a.195.195 0 1 1-.39 0 .195.195 0 0 1 .39 0M10.887 9.917v6.403M15.507 9.917l-4.612 3.839M15.508 16.32l-3.215-3.663"
    />
  </Svg>
);
export default IconlystKelvinDegreeCircleLight;
