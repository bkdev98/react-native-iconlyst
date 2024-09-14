import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPlayTwoTone = ({
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
      d="M12.457 20.922a7.63 7.63 0 1 1 7.63-7.629"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.363 3h4.19M12.447 13.267l2.929-2.93"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.745 19.474a7.7 7.7 0 0 1-2.251 1.426c-.727.29-1.335-.072-1.425-.795a14.3 14.3 0 0 1 0-3.038c.098-.751.768-1.07 1.425-.791.84.347 1.595.819 2.251 1.426.56.512.574 1.24 0 1.772"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchPlayTwoTone;
