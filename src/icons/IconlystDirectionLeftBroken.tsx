import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftBroken = ({
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
      d="M15.06 4.23c-1.733-1.733-4.034-1.588-5.766.144l-4.672 4.67c-1.731 1.733-1.871 4.04-.143 5.768l4.958 4.958c1.733 1.733 4.035 1.589 5.767-.143l4.672-4.672c1.731-1.731 1.876-4.033.142-5.767l-2.479-2.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.608 10.788h4.799a1.58 1.58 0 0 1 1.58 1.58v3.021"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.797 8.606-2.189 2.182 2.19 2.18"
    />
  </Svg>
);
export default IconlystDirectionLeftBroken;
