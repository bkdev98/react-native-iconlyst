import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleClockOutline = ({
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
      d="M12.408 3.75a7.553 7.553 0 0 0-7.554 7.553 7.553 7.553 0 0 0 7.554 7.554 7.553 7.553 0 0 0 7.553-7.554 7.553 7.553 0 0 0-7.553-7.553m-9.054 7.553c0-5 4.054-9.053 9.054-9.053s9.053 4.053 9.053 9.053-4.053 9.054-9.053 9.054-9.054-4.053-9.054-9.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.315 17.66a.75.75 0 0 1 .27 1.026l-1.566 2.69a.75.75 0 0 1-1.296-.754l1.566-2.69a.75.75 0 0 1 1.026-.271M16.504 17.66a.75.75 0 0 1 1.025.271l1.566 2.691a.75.75 0 1 1-1.296.755l-1.566-2.691a.75.75 0 0 1 .27-1.026M12.104 7.395a.75.75 0 0 1 .75.75v3.27l2.53 1.06a.75.75 0 1 1-.58 1.384l-2.99-1.254a.75.75 0 0 1-.46-.692V8.145a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleClockOutline;
