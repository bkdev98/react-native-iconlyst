import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBalloonBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.624 19.085H10.38l1.621-1.674z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.788 21.865c-1.155-2.267.963-2.78.963-2.78M18.603 9.968a6.603 6.603 0 0 0-13.207 0c0 3.647 2.957 7.443 6.604 7.443 2.484 0 4.649-1.762 5.776-4.039"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.875 9.904a2.857 2.857 0 0 1 2.857-2.857M19.479 18.368a1.6 1.6 0 0 0-1.75 1.44M3.273 14.701c-.278.623 0 1.355.624 1.633l.128.058c.553.247.8.895.553 1.447l-.054.12a.963.963 0 0 0 .486 1.274M20.285 4.468q.014-.006-.004-.01M4.112 3.391a1.556 1.556 0 0 1-.807 2.047"
    />
  </Svg>
);
export default IconlystBalloonBroken;
