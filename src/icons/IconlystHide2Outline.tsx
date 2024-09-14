import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M6.77 19.181a.75.75 0 0 1-.408-.12c-2.419-1.569-3.863-3.85-3.863-6.1 0-4.109 4.649-7.85 9.755-7.85 2.083.013 4.12.618 5.871 1.744a.75.75 0 1 1-.813 1.26 9.46 9.46 0 0 0-5.058-1.5c-4.243 0-8.255 3.086-8.255 6.35 0 1.743 1.188 3.554 3.18 4.844a.75.75 0 0 1-.409 1.38z"
    />
    <Path
      fill={props.color}
      d="M10.074 15.869a.75.75 0 0 1-.527-.217 3.823 3.823 0 0 1 2.693-6.529 4.08 4.08 0 0 1 2.71 1.118.75.75 0 0 1-1.06 1.062 2.34 2.34 0 0 0-1.642-.68h-.005a2.325 2.325 0 0 0-2.319 2.327 2.27 2.27 0 0 0 .678 1.636.75.75 0 0 1-.528 1.283"
    />
    <Path
      fill={props.color}
      d="M4.58 21.37a.75.75 0 0 1-.53-1.28L19.39 4.75a.75.75 0 0 1 1.06 1.06L5.11 21.15a.75.75 0 0 1-.53.22M12.803 16.72a.75.75 0 0 1-.135-1.489 2.33 2.33 0 0 0 1.865-1.868.751.751 0 0 1 1.477.268 3.84 3.84 0 0 1-3.07 3.076 1 1 0 0 1-.137.012"
    />
    <Path
      fill={props.color}
      d="M12.257 20.806a10.5 10.5 0 0 1-2.65-.337.75.75 0 0 1 .377-1.451 9 9 0 0 0 2.273.288c4.238 0 8.245-3.086 8.245-6.35a4.9 4.9 0 0 0-1.11-2.947.75.75 0 1 1 1.19-.912 6.38 6.38 0 0 1 1.42 3.86c0 4.108-4.645 7.849-9.745 7.849"
    />
  </Svg>
);
export default IconlystHide2Outline;
