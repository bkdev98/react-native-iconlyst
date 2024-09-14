import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodPro1Broken = ({
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
      d="M14.014 8.052c.573.75 1.464 1.315 2.54 1.528l.008.002c.102.02.203.04.307.044l-1.53 2.92c-.342.74-.088 1.645.657 2.012a1.48 1.48 0 0 0 1.912-.547 34 34 0 0 0 1.756-3.171M20.882 7.62c.561-2.177-.949-4.095-3.05-4.51-1.078-.212-2.12-.019-2.934.456M17.099 5.901l1.212.24M9.956 14.4c-.589.736-1.494 1.283-2.575 1.472-.104.018-.207.036-.314.039l1.464 2.952c.327.75.054 1.648-.699 1.998a1.48 1.48 0 0 1-1.9-.589c-.6-1.015-1.388-2.45-2.012-3.96M3.1 13.818c-.515-2.19 1.036-4.074 3.148-4.442 1.081-.188 2.118.028 2.922.52M6.92 12.182l-1.218.213"
    />
  </Svg>
);
export default IconlystAirpodPro1Broken;
