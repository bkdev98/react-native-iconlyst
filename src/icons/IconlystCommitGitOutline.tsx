import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommitGitOutline = ({
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
      d="M12.25 9.977a2.025 2.025 0 1 0 0 4.05 2.025 2.025 0 0 0 0-4.05M8.725 12a3.525 3.525 0 1 1 7.05.002A3.525 3.525 0 0 1 8.726 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.5 12.004a.75.75 0 0 1 .75-.75h5.225a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1-.75-.75m10.775 0a.75.75 0 0 1 .75-.75h5.225a.75.75 0 0 1 0 1.5h-5.225a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCommitGitOutline;
