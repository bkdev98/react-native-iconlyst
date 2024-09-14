import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendar2Line2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.79 4.953c.918-.874 2.197-1.281 3.654-1.281h7.62c1.46 0 2.74.407 3.658 1.281.923.88 1.383 2.141 1.378 3.649v8.212c0 1.507-.46 2.77-1.384 3.651-.918.877-2.198 1.286-3.66 1.286H8.445c-1.461 0-2.742-.418-3.66-1.308-.922-.894-1.384-2.171-1.384-3.697V8.6c0-1.509.464-2.769 1.39-3.648M5.822 6.04C5.262 6.573 4.9 7.403 4.9 8.6v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.885 2.616.885h7.613c1.19 0 2.057-.33 2.623-.87.56-.536.92-1.368.92-2.567V8.599c.004-1.2-.354-2.027-.913-2.56-.564-.538-1.431-.867-2.623-.867h-7.62c-1.187 0-2.054.329-2.621.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.771 11.012a.75.75 0 0 1 .75-.75h7.456a.75.75 0 0 1 0 1.5H8.521a.75.75 0 0 1-.75-.75m0 4.172a.75.75 0 0 1 .75-.75h4.321a.75.75 0 0 1 0 1.5h-4.32a.75.75 0 0 1-.75-.75M8.62 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m7.27 0a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendar2Line2Outline;
