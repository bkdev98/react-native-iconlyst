import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingBroken = ({
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
      d="M12.25 16.801c-1.996 0-3.614-1.74-3.614-3.887h7.229c0 1.2-.506 2.274-1.301 2.987M8.636 8.498h1.592M15.28 8.505v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
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
export default IconlystWinkingBroken;
