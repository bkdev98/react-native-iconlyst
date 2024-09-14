import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiKeyOutline = ({
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
      d="M3.75 12.176a4.064 4.064 0 0 1 7.788-1.634.75.75 0 0 0 .687.449l1.183-.001.91.908a.75.75 0 0 0 .98.069l.999-.752.754.702a.75.75 0 0 0 .978.037l.94-.749.97.97-1.224 1.226-6.51.001a.75.75 0 0 0-.684.442 4.064 4.064 0 0 1-7.77-1.668M7.814 6.61a5.564 5.564 0 1 0 4.85 8.291l6.362-.001a.75.75 0 0 0 .53-.22l1.974-1.975a.75.75 0 0 0 0-1.06L19.556 9.67a.75.75 0 0 0-.998-.056l-.959.763-.74-.689a.75.75 0 0 0-.962-.05l-.98.738-.67-.668a.75.75 0 0 0-.53-.22l-1.027.002a5.56 5.56 0 0 0-4.876-2.88M13.561 6.03a.474.474 0 1 0 0-.95.474.474 0 0 0 0 .95m1.974-.475a1.974 1.974 0 1 1-3.948 0 1.974 1.974 0 0 1 3.948 0M18.652 18.918a.474.474 0 1 1 0-.948.474.474 0 0 1 0 .948m-1.974-.474a1.974 1.974 0 1 0 3.948 0 1.974 1.974 0 0 0-3.948 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.83 12.158a.766.766 0 1 0 1.532 0 .766.766 0 0 0-1.533 0m.765 2.266a2.266 2.266 0 1 1 0-4.533 2.266 2.266 0 0 1 0 4.533M19.607 5.557a.75.75 0 0 1-.75.75h-4.072a.75.75 0 0 1 0-1.5h4.072a.75.75 0 0 1 .75.75M12.606 18.445c0 .415.335.75.75.75h4.072a.75.75 0 0 0 0-1.5h-4.073a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiKeyOutline;
