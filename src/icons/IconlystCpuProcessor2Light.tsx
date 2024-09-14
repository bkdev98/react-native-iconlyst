import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor2Light = ({
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
      d="M8.787 13.42c0 1.048.656 1.79 1.708 1.79h3.009c1.052 0 1.704-.742 1.704-1.79v-2.836c0-1.052-.652-1.795-1.704-1.795h-3.01c-1.047 0-1.707.743-1.707 1.795zM11.344 13.264v1.947M12.82 8.79v1.945"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.021 15.084c0 2.277 1.426 3.89 3.71 3.89h6.538c2.286 0 3.704-1.613 3.704-3.89V8.922c0-2.284-1.418-3.899-3.704-3.899H8.732c-2.278 0-3.71 1.615-3.71 3.9zM9.613 20.998v-2.021m4.774 2.02v-2.02M5.021 9.617H3m2.021 4.766H3M9.613 5.025V3.004m4.774 2.02v-2.02M21 9.617h-2.03M21 14.383h-2.03"
    />
  </Svg>
);
export default IconlystCpuProcessor2Light;
