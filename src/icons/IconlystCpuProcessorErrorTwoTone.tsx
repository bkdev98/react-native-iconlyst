import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorTwoTone = ({
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
      d="M19.474 11.624v3.461c0 2.278-1.418 3.892-3.704 3.892H9.233c-2.285 0-3.71-1.614-3.71-3.892v-6.16c0-2.285 1.432-3.9 3.71-3.9h3.837"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.555 3.475V6.16m.006 2.43.003-.057M21.5 14.383h-2.03M10.113 5.025V3.004M5.521 9.617H3.5m2.021 4.766H3.5M10.113 20.998v-2.021m4.774 2.02v-2.02"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.434 12.504v.793c0 .96-.597 1.639-1.56 1.639h-2.752c-.961 0-1.561-.68-1.561-1.639v-2.593c0-.962.603-1.642 1.561-1.642h1.853"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorTwoTone;
