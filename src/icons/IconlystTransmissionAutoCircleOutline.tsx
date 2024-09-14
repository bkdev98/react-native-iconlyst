import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransmissionAutoCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.264A8.25 8.25 0 0 0 4 12.514a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.202 8.264a.75.75 0 0 1 .688.442l3.15 7a.75.75 0 0 1-1.367.616l-2.457-5.46-2.385 5.452a.75.75 0 0 1-1.375-.6l3.063-7a.75.75 0 0 1 .683-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.536 14.963H9.964v-1.5h4.572z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransmissionAutoCircleOutline;
