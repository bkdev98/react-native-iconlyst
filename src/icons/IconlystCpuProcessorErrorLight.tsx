import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorLight = ({
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
      d="M18.974 11.624v3.461c0 2.278-1.418 3.892-3.704 3.892H8.733c-2.285 0-3.71-1.614-3.71-3.892v-6.16c0-2.285 1.432-3.9 3.71-3.9h3.837M17.055 3.475V6.16m.006 2.43.003-.057M21 14.383h-2.03M9.613 5.025V3.004M5.021 9.617H3m2.021 4.766H3M9.613 20.998v-2.021m4.774 2.02v-2.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.934 12.504v.793c0 .96-.597 1.639-1.56 1.639h-2.752c-.961 0-1.561-.68-1.561-1.639v-2.593c0-.962.603-1.642 1.561-1.642h1.853"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorLight;
