import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodPro1Light = ({
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
      d="M9.722 9.446a2.32 2.32 0 0 1 1.936.304.86.86 0 0 1 .374.568l.472 2.706a.82.82 0 0 1-.128.612 2.32 2.32 0 0 1-1.75.987.86.86 0 0 1-.927-.701l-.611-3.502a.86.86 0 0 1 .634-.974M12.413 3.366a2.32 2.32 0 0 1 1.942-.262c.428.125.698.55.612.987L14.28 7.58a.86.86 0 0 1-.94.682 2.32 2.32 0 0 1-1.73-1.027.82.82 0 0 1-.114-.615l.531-2.694a.86.86 0 0 1 .386-.559"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.014 8.052c.573.75 1.464 1.315 2.54 1.528.106.02.209.041.315.046l-1.53 2.92c-.342.74-.088 1.645.657 2.012a1.48 1.48 0 0 0 1.912-.547c.963-1.551 2.4-4.099 2.974-6.39.562-2.178-.948-4.096-3.05-4.51-1.077-.213-2.12-.02-2.934.455m2.2 2.335 1.213.24M9.956 14.4c-.589.736-1.494 1.283-2.575 1.472-.104.018-.207.036-.314.039l1.464 2.952c.327.75.054 1.648-.699 1.998a1.48 1.48 0 0 1-1.9-.589c-.929-1.572-2.31-4.15-2.833-6.454-.514-2.19 1.037-4.074 3.15-4.442 1.08-.189 2.117.027 2.921.52m-2.25 2.286-1.218.212"
    />
  </Svg>
);
export default IconlystAirpodPro1Light;
