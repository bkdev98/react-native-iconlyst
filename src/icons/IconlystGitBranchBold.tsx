import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBranchBold = ({
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
      d="M20.339 6.597a2.975 2.975 0 0 0-2.972-2.972 2.976 2.976 0 0 0-2.972 2.972c0 1.335.891 2.454 2.106 2.828a7.69 7.69 0 0 1-6.956 7.377 2.98 2.98 0 0 0-2.222-2.283V5.037a.75.75 0 0 0-1.5 0v9.519a2.97 2.97 0 0 0-2.162 2.846 2.976 2.976 0 0 0 2.972 2.972 2.97 2.97 0 0 0 2.814-2.057 9.19 9.19 0 0 0 8.55-8.819 2.974 2.974 0 0 0 2.342-2.901"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitBranchBold;
