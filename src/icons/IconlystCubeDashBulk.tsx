import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeDashBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.019 21.65H12a2.9 2.9 0 0 1-1.47-.397l-5.684-3.279a2.93 2.93 0 0 1-1.468-2.542v-6.56c0-1.053.564-2.027 1.471-2.545l5.683-3.278a2.906 2.906 0 0 1 2.936 0l5.684 3.28a2.93 2.93 0 0 1 1.468 2.542v6.561a2.93 2.93 0 0 1-1.47 2.543l-5.684 3.28c-.447.26-.947.392-1.449.395"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.001 21.65h.018q.37-.003.731-.098v-2.48a.75.75 0 0 0-1.5 0v2.48q.37.097.751.097M3.435 8.298l2.391 1.38a.75.75 0 0 0 .75-1.3l-2.48-1.43c-.332.382-.56.848-.66 1.35M19.906 6.947c.33.383.56.849.659 1.352l-2.392 1.38a.75.75 0 0 1-.75-1.3zM8.528 10.373a.75.75 0 0 1 1.024-.275L12 11.511l2.447-1.413a.75.75 0 1 1 .75 1.3L12.75 12.81v2.826a.75.75 0 0 1-1.5 0V12.81l-2.448-1.412a.75.75 0 0 1-.274-1.025"
    />
  </Svg>
);
export default IconlystCubeDashBulk;
