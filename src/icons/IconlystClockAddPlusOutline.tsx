import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockAddPlusOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.658 12a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75.75.75 0 0 1-1.5 0 8.25 8.25 0 0 0-8.25-8.25 8.25 8.25 0 0 0 0 16.5.75.75 0 0 1 0 1.5c-5.385 0-9.75-4.366-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.737 7.826a.75.75 0 0 1 .75.75v4.098a.75.75 0 0 1-.365.644l-3.175 1.897a.75.75 0 1 1-.77-1.287l2.81-1.68V8.577a.75.75 0 0 1 .75-.75M18.281 14.117a.75.75 0 0 1 .75.75v5.787a.75.75 0 1 1-1.5 0v-5.787a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.637 17.76a.75.75 0 0 1 .75-.75h5.787a.75.75 0 0 1 0 1.5h-5.787a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockAddPlusOutline;
