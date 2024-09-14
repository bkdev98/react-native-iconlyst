import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBadgeBold = ({
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
      d="M15.519 9.924a.75.75 0 0 1-.886.585 3 3 0 0 1-.904-.341v3.717a2.636 2.636 0 0 1-2.632 2.634 2.637 2.637 0 0 1-2.635-2.633 2.637 2.637 0 0 1 2.635-2.634c.407 0 .787.1 1.132.267V8.232a.75.75 0 0 1 1.45-.268c.012.03.371.896 1.255 1.075a.75.75 0 0 1 .585.885m3.205-6.592a1.62 1.62 0 0 0-1.575-.092l-.716.343c-.3.143-.649.154-.956.028l-2.017-.824a3.84 3.84 0 0 0-2.92 0l-2.024.824a1.19 1.19 0 0 1-.954-.027l-.71-.342a1.63 1.63 0 0 0-1.578.093 1.62 1.62 0 0 0-.762 1.382v14.568c0 .564.284 1.08.762 1.383a1.62 1.62 0 0 0 1.577.092l.715-.343c.3-.144.647-.154.955-.028l2.018.824c.472.192.966.289 1.462.289.495 0 .989-.097 1.46-.29l2.021-.823c.309-.125.657-.114.956.028l.71.34c.509.245 1.099.21 1.576-.09.479-.301.764-.818.764-1.384V4.715c0-.565-.285-1.082-.764-1.383"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.097 12.752c-.625 0-1.134.509-1.134 1.134s.509 1.133 1.134 1.133a1.133 1.133 0 0 0 0-2.267"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongBadgeBold;
