import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteeringWheelCrossOutline = ({
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
      d="M10.685 9.323a1.25 1.25 0 0 0-.93.415l-.905 1.009a.75.75 0 0 1-.559.25H3.77a.75.75 0 0 1 0-1.5h4.188l.68-.76.554.496-.553-.496a2.75 2.75 0 0 1 2.047-.914h3.132a2.75 2.75 0 0 1 2.047.914l.68.76h4.19a.75.75 0 0 1 0 1.5H16.21a.75.75 0 0 1-.558-.25l-.905-1.009a1.25 1.25 0 0 0-.93-.415z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.635a8.25 8.25 0 0 0 0 16.5.75.75 0 0 1 0 1.5c-5.385 0-9.75-4.366-9.75-9.75s4.365-9.75 9.75-9.75S22 7.5 22 12.885a.75.75 0 0 1-1.5 0 8.25 8.25 0 0 0-8.25-8.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.095 16.82c.917 1.014 1.397 2.587 1.397 4.823a.75.75 0 0 0 1.5 0c0-2.413-.513-4.422-1.785-5.83-1.286-1.42-3.217-2.086-5.734-2.086a.75.75 0 0 0 0 1.5c2.265 0 3.718.594 4.622 1.593M16.124 16.758a.75.75 0 0 1 1.06 0l1.768 1.768 1.768-1.768a.75.75 0 0 1 1.06 1.06l-1.767 1.769 1.767 1.767a.75.75 0 0 1-1.06 1.061l-1.768-1.768-1.768 1.768a.75.75 0 1 1-1.06-1.06l1.767-1.768-1.767-1.768a.75.75 0 0 1 0-1.06M12.25 13.22a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSteeringWheelCrossOutline;
