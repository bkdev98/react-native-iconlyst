import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullRequestBroken = ({
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
      d="M16.959 20a2.474 2.474 0 1 1 2.292-1.544M12.73 8.623V5.339l3.285-.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.001 15.054V11.24a3.94 3.94 0 0 0-1.154-2.787L12.73 5.338M7.54 20a2.474 2.474 0 1 0-2.187-1.32M5.067 6.473a2.474 2.474 0 1 0 1.419-2.237M7.541 8.947v6.107"
    />
  </Svg>
);
export default IconlystGitPullRequestBroken;
