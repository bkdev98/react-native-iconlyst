import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBroken = ({
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
      d="M4.98 14.81c-1.733-1.733-1.588-4.034.144-5.766l4.67-4.672c1.733-1.73 4.04-1.871 5.768-.143l4.958 4.958c1.733 1.733 1.589 4.036-.143 5.767l-4.672 4.672c-1.731 1.731-4.033 1.876-5.767.142l-2.48-2.479"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.585 15.073a1.463 1.463 0 1 1-2.926 0 1.463 1.463 0 0 1 2.926 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.688 12.004a1.463 1.463 0 1 1-1.463-1.463"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.585 8.084a1.463 1.463 0 1 1-2.926.001 1.463 1.463 0 0 1 2.926 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.165 6.978-1.901-1.91M15.176 10.988 13.23 9.043M12.123 9.547v4.063"
    />
  </Svg>
);
export default IconlystGitBroken;
