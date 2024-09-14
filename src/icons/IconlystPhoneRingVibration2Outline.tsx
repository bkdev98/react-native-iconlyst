import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration2Outline = ({
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
      d="M14.905 21.054h-4.07a4.093 4.093 0 0 1-4.085-4.088v-9.93a4.1 4.1 0 0 1 4.089-4.09h4.069a4.094 4.094 0 0 1 4.089 4.09v9.93a4.093 4.093 0 0 1-4.092 4.088m-4.07-16.612A2.59 2.59 0 0 0 8.25 7.035v9.934a2.59 2.59 0 0 0 2.588 2.588h4.07a2.59 2.59 0 0 0 2.589-2.589V7.035a2.59 2.59 0 0 0-2.589-2.59zM4.59 16.867a.75.75 0 0 1-.53-1.28l.784-.785a.75.75 0 0 1 1.06 1.06l-.785.785a.74.74 0 0 1-.53.22M5.375 9.435a.75.75 0 0 1-.53-.219l-.785-.785a.75.75 0 0 1 1.06-1.06l.785.784a.75.75 0 0 1-.53 1.28M21.15 16.867a.74.74 0 0 1-.53-.22l-.786-.785a.75.75 0 0 1 1.06-1.06l.785.785a.75.75 0 0 1-.53 1.28M20.367 9.435a.75.75 0 0 1-.53-1.28l.785-.785a.75.75 0 0 1 1.06 1.061l-.785.785a.75.75 0 0 1-.53.22M4.982 12.755h-1.11a.75.75 0 1 1 0-1.5h1.11a.75.75 0 1 1 0 1.5M21.87 12.755h-1.11a.75.75 0 1 1 0-1.5h1.11a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M12.871 17.847a1 1 0 1 1 0-2.002 1 1 0 0 1 0 2.002"
    />
  </Svg>
);
export default IconlystPhoneRingVibration2Outline;
