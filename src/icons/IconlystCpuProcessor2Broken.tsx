import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor2Broken = ({
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
      d="M9.287 13.42c0 1.048.656 1.79 1.708 1.79h3.009c1.052 0 1.704-.742 1.704-1.79v-2.836c0-1.052-.652-1.795-1.704-1.795h-3.01c-1.047 0-1.707.743-1.707 1.795M11.844 13.264v1.947M13.32 8.79v1.945M10.113 20.998v-2.021m4.774 2.02v-2.02M5.521 9.617H3.5m2.021 4.766H3.5M10.113 5.025V3.004m4.774 2.02v-2.02M21.5 9.617h-2.03m2.03 4.766h-2.03"
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
export default IconlystCpuProcessor2Broken;
