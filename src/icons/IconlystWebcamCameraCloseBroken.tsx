import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebcamCameraCloseBroken = ({
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
      d="M9.716 15.397v.008m5.47.464a6.3 6.3 0 0 1-2.217.394 6.5 6.5 0 0 1-3.25-.858 6.61 6.61 0 0 1-3.373-5.773c0-.771.131-1.524.386-2.216M18.25 18.934a1.193 1.193 0 0 1-1.113 1.612h-3.814"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.716 15.404-1.945 3.364a1.185 1.185 0 0 0 1.035 1.779h1.532M8.895 4.42A6.5 6.5 0 0 1 12.968 3 6.63 6.63 0 0 1 18.9 6.665M19.6 9.633c0 1.542-.526 2.96-1.42 4.083M12.137 7.67c.254-.115.534-.176.832-.176 1.183 0 2.146.955 2.146 2.138 0 .298-.061.587-.175.84M4.684 5.365 20.319 21"
    />
  </Svg>
);
export default IconlystWebcamCameraCloseBroken;
