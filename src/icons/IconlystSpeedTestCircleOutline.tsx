import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeedTestCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.135 8.732a4.433 4.433 0 0 0-6.57 5.937.75.75 0 1 1-1.161.95 5.934 5.934 0 1 1 9.194 0 .75.75 0 0 1-1.162-.95 4.434 4.434 0 0 0-.3-5.937"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.408 9.34a.75.75 0 0 1 0 1.061l-2.111 2.112a.75.75 0 0 1-1.06-1.061l2.11-2.111a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeedTestCircleOutline;
