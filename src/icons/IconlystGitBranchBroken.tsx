import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBranchBroken = ({
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
      d="M7.542 20a2.474 2.474 0 1 0-2.238-1.42M16.96 9.46a2.474 2.474 0 1 0 2.323 1.625"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.978 14.406v1.17a2.006 2.006 0 0 1-2.007 2.006h-4.956M5.068 6.473a2.474 2.474 0 1 0 1.425-2.24M7.542 8.947v6.107"
    />
  </Svg>
);
export default IconlystGitBranchBroken;
