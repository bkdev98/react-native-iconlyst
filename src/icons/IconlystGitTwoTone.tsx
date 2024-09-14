import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.812 4.228 4.958 4.958c1.733 1.733 1.589 4.036-.143 5.767l-4.672 4.672c-1.731 1.731-4.033 1.876-5.767.142L4.23 14.81c-1.733-1.733-1.588-4.034.144-5.766l4.67-4.672c1.733-1.731 4.04-1.871 5.768-.143"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.835 15.073a1.463 1.463 0 1 1-2.926 0 1.463 1.463 0 0 1 2.926 0M16.938 12.002a1.463 1.463 0 1 1-2.925.001 1.463 1.463 0 0 1 2.925 0M12.835 8.084a1.463 1.463 0 1 1-2.926.001 1.463 1.463 0 0 1 2.926 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.415 6.98 8.514 5.07M14.426 10.988 12.48 9.043M11.373 9.547v4.063"
    />
  </Svg>
);
export default IconlystGitTwoTone;
