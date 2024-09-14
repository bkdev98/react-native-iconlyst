import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorBroken = ({
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
      d="M17.555 3.475V6.16m.006 2.43.003-.057M21.5 14.383h-2.03M10.113 5.025V3.004M5.521 9.617H3.5m2.021 4.766H3.5M10.113 20.998v-2.021m4.774 2.02v-2.02M15.434 12.504v.793c0 .96-.597 1.639-1.56 1.639h-2.752c-.961 0-1.561-.68-1.561-1.639v-2.593c0-.962.603-1.642 1.561-1.642h1.853M13.404 5.023H9.232c-2.278 0-3.71 1.615-3.71 3.9v2.912"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.473 12.623v2.46c0 2.278-1.418 3.891-3.704 3.891H9.232c-2.285 0-3.71-1.613-3.71-3.891v-.658"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorBroken;
