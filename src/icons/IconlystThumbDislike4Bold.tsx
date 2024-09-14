import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike4Bold = ({
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
      d="M15.74 3.627c-.552-.275-1.225-.275-2.566-.275H7.475c-1.08 0-1.623 0-2.108.197a2.7 2.7 0 0 0-1.128.864c-.315.415-.455.934-.739 1.984l-.484 1.795c-.526 1.95-.789 2.928-.555 3.75a3.07 3.07 0 0 0 1.379 1.8c.734.442 1.751.442 3.775.442h1.821q.071-.001.097.002a1 1 0 0 1-.026.102c-.83 2.58-.947 4.412-.345 5.443.27.462.673.75 1.197.859.176.036.327.06.468.06.291 0 .539-.105.871-.43 1.276-1.503 3.428-3.856 4.606-5.134.311-.337.467-.506.586-.714q.17-.293.245-.621c.052-.237.052-.47.052-.933V7.364c0-1.341 0-2.012-.276-2.565a2.64 2.64 0 0 0-1.171-1.172M20.625 3.352a1 1 0 0 0-1 1V13.4a1 1 0 1 0 2 0V4.35a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislike4Bold;
