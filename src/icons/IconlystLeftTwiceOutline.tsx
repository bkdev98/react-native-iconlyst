import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftTwiceOutline = ({
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
      d="M8.577 12.458a.75.75 0 0 1-1.06 0L3.552 8.494a.75.75 0 0 1 0-1.061L7.517 3.47a.75.75 0 0 1 1.06 1.06L5.143 7.963l3.434 3.434a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.668 7.966a.75.75 0 0 1-.75.75H4.082a.75.75 0 1 1 0-1.5h15.836a.75.75 0 0 1 .75.75M15.813 20.532a.75.75 0 0 1-1.06 0l-3.586-3.584a.75.75 0 0 1 .03-1.09l3.555-3.555a.75.75 0 0 1 1.06 1.06l-2.302 2.303h6.408a.75.75 0 0 1 0 1.5h-6.412l2.307 2.305a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftTwiceOutline;
