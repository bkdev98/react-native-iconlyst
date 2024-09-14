import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBranchBulk = ({
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
      d="M7.688 4a.75.75 0 1 0-1.5 0v3.02a.75.75 0 1 0 1.5 0zm0 8.329a.75.75 0 0 0-1.5 0V20a.75.75 0 0 0 1.5 0zm4.646-3.376a.75.75 0 0 0 0 1.5h2.745c.681 0 1.233.553 1.233 1.234v2.938a.75.75 0 0 0 1.5 0v-2.938a2.734 2.734 0 0 0-2.733-2.734z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.935 12.667a3.027 3.027 0 1 0 0-6.054 3.027 3.027 0 0 0 0 6.054M17.065 20.357a3.027 3.027 0 1 0 0-6.054 3.027 3.027 0 0 0 0 6.054"
    />
  </Svg>
);
export default IconlystGitBranchBulk;
