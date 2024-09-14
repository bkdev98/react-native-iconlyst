import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockCloseOutline = ({
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
      d="M15.706 15.185a.75.75 0 0 1 1.06 0l4.093 4.092a.75.75 0 0 1-1.06 1.06l-4.093-4.092a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.859 15.185a.75.75 0 0 1 0 1.06l-4.092 4.092a.75.75 0 0 1-1.061-1.06l4.092-4.093a.75.75 0 0 1 1.061 0M12.737 7.838a.75.75 0 0 1 .75.75v4.098a.75.75 0 0 1-.365.644l-3.174 1.898a.75.75 0 1 1-.77-1.287l2.81-1.68V8.588a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockCloseOutline;
