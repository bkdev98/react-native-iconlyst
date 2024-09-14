import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefreshBroken = ({
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
      d="m13.001 13.482 1.459.74A2.964 2.964 0 0 1 9.536 12M11.998 10.517l-1.459-.74a2.964 2.964 0 0 1 4.924 2.222M10.113 20.998v-2.021m4.772 2.02v-2.02M10.113 5.025V3.004m4.772 2.02v-2.02M5.521 9.617H3.5m2.021 4.766H3.5M21.5 9.617h-2.03m2.03 4.766h-2.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.473 9.601v-.679c0-2.284-1.418-3.899-3.704-3.899H9.232c-2.278 0-3.71 1.615-3.71 3.9v2.912M19.473 12.623v2.46c0 2.278-1.418 3.891-3.704 3.891H9.232c-2.285 0-3.71-1.613-3.71-3.891v-.658"
    />
  </Svg>
);
export default IconlystCpuProcessorRefreshBroken;
