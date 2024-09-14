import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefresh2Light = ({
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
      d="M13.96 14.222A2.964 2.964 0 0 1 9.036 12M10.04 9.777a2.964 2.964 0 0 1 4.924 2.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.022 15.086c0 2.277 1.426 3.89 3.71 3.89h6.538c2.286 0 3.704-1.613 3.704-3.89V8.924c0-2.284-1.418-3.899-3.704-3.899H8.733c-2.278 0-3.71 1.615-3.71 3.9zM9.613 20.998v-2.021m4.774 2.02v-2.02M5.021 9.617H3m2.021 4.766H3M9.613 5.025V3.004m4.774 2.02v-2.02M21 9.617h-2.03M21 14.383h-2.03"
    />
  </Svg>
);
export default IconlystCpuProcessorRefresh2Light;
