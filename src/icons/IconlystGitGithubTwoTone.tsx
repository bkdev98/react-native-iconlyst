import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubTwoTone = ({
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
      d="M9.573 9.594a2.405 2.405 0 1 1 .001-4.81 2.405 2.405 0 0 1 0 4.81M9.573 20a2.405 2.405 0 1 1 .001-4.81 2.405 2.405 0 0 1 0 4.81"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.72 11.72-.017-.016m1.966 3.788a2.405 2.405 0 1 1 0-4.81 2.405 2.405 0 0 1 0 4.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.573 9.594v5.596M15.703 11.705l-4.238-3.03M7.559 5.879 4.927 4"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGitGithubTwoTone;
