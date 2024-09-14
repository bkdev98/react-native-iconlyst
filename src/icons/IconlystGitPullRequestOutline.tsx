import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullRequestOutline = ({
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
      d="M16.959 15.805a1.724 1.724 0 1 0 0 3.447 1.724 1.724 0 0 0 0-3.447m-3.224 1.723a3.224 3.224 0 1 1 6.448 0 3.224 3.224 0 0 1-6.448 0M13.48 6.087l2.536-.001a.75.75 0 0 0 0-1.5H12.73a.75.75 0 0 0-.75.75v3.285a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.2 4.806a.75.75 0 0 1 1.06 0l3.117 3.116a4.7 4.7 0 0 1 1.374 3.317v3.813a.75.75 0 1 1-1.5 0v-3.813a3.2 3.2 0 0 0-.935-2.256L12.2 5.866a.75.75 0 0 1 0-1.06M7.541 15.805a1.724 1.724 0 1 0 0 3.448 1.724 1.724 0 0 0 0-3.448m-3.224 1.723a3.224 3.224 0 1 1 6.448.001 3.224 3.224 0 0 1-6.448-.001M7.54 4.75a1.724 1.724 0 1 0 .002 3.448A1.724 1.724 0 0 0 7.54 4.75M4.318 6.473a3.224 3.224 0 1 1 6.448.001 3.224 3.224 0 0 1-6.448 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.541 8.195a.75.75 0 0 1 .75.75v6.107a.75.75 0 0 1-1.5 0V8.945a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitPullRequestOutline;
