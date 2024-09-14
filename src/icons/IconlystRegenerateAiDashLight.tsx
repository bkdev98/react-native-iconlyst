import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenerateAiDashLight = ({
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
      d="M5.615 5.928a9 9 0 0 0-.975 1.32M4.547 16.22a8.5 8.5 0 0 1-.743-1.669M10.197 20.409l.01-.001a8.3 8.3 0 0 0 1.961.224M9.447 3.435a8.3 8.3 0 0 0-1.667.743M12.199 3a8.3 8.3 0 0 1 1.962.225c.915.203 1.79.562 2.58 1.048.477.282.923.606 1.329.974a8.6 8.6 0 0 1 1.75 2.156q.463.79.745 1.676A8.7 8.7 0 0 1 21 11.83a8 8 0 0 1-.226 1.952v.01a8.4 8.4 0 0 1-1.049 2.571 7.7 7.7 0 0 1-.973 1.329 8.7 8.7 0 0 1-2.164 1.76c-.526.3-1.087.558-1.668.744M7.625 19.349a8 8 0 0 1-1.318-.966M3.592 9.831a8.2 8.2 0 0 0-.224 1.972"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.034 20.755-2.096-.578.59-2.083M10.054 8.141l.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.102-.273.1a3.76 3.76 0 0 0-2.222 2.226l-.1.273-.102-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225zM15.365 12.225a1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystRegenerateAiDashLight;
