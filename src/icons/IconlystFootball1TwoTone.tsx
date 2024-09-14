import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFootball1TwoTone = ({
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
      d="M12.5 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.5 9-3 2 1 4h4l1-4zM10.5 15l-1.294 2.203M14.498 15.01l1.414 2.193M12.498 9V5.5M9.5 11l-2.89-.89M15.5 11l2.922-.947M5.223 6.72l1.378 3.333-3.058 2.765M9.5 3.5l3 2 3-2M19.8 6.72l-1.378 3.333 3.058 2.765M14.887 20.663l1.015-3.46 4.116-.237M10.227 20.663l-1.015-3.46-4.116-.237"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFootball1TwoTone;
