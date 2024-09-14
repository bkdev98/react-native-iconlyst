import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithTongueBroken = ({
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
      d="M9.02 9.005v-.051M8.974 8.8a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.48 9.005v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.49 13.316h7.52M14.106 13.316v1.48a1.855 1.855 0 0 1-3.71 0v-1.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 3.002H8.031c-2.94 0-4.782 2.081-4.782 5.026v7.948c0 2.945 1.834 5.026 4.782 5.026h8.434c2.949 0 4.784-2.081 4.784-5.026V8.028c0-2.945-1.835-5.026-4.783-5.026L16.05 3"
    />
  </Svg>
);
export default IconlystFaceWithTongueBroken;
