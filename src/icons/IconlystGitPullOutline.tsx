import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullOutline = ({
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
      d="M7.542 8.195a1.724 1.724 0 1 1 0-3.447 1.724 1.724 0 0 1 0 3.447M4.318 6.472a3.224 3.224 0 1 0 6.448 0 3.224 3.224 0 0 0-6.448 0M7.542 19.25a1.724 1.724 0 1 1 0-3.448 1.724 1.724 0 0 1 0 3.448m-3.224-1.723a3.224 3.224 0 1 0 6.448-.001 3.224 3.224 0 0 0-6.448 0M16.96 19.25a1.724 1.724 0 1 1 0-3.448 1.724 1.724 0 0 1 0 3.448m-3.224-1.723a3.224 3.224 0 1 0 6.448-.001 3.224 3.224 0 0 0-6.448 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.541 15.805a.75.75 0 0 0 .75-.75V8.948a.75.75 0 1 0-1.5 0v6.107c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.978 15.805a.75.75 0 0 0 .75-.75v-1.17a2.756 2.756 0 0 0-2.757-2.756H7.538a.75.75 0 0 0 0 1.5h7.433c.694 0 1.257.563 1.257 1.256v1.17c0 .414.335.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitPullOutline;
