import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommitGitBulk = ({
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
      d="M3.25 12a.75.75 0 0 1 .75-.75h5.225a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m10.775 0a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-5.225a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Circle cx={12} cy={11.999} r={3.134} fill={props.color} />
  </Svg>
);
export default IconlystCommitGitBulk;
