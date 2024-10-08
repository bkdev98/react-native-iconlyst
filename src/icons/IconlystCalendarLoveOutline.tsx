import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarLoveOutline = ({
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
      d="M8.62 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m7.27 0a.75.75 0 0 1 .75.75v2.962a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75M12.25 10.067a2.65 2.65 0 0 1 1.949-.132h.001c1.62.522 2.082 2.243 1.656 3.576-.343 1.066-1.21 1.925-1.892 2.48a10.4 10.4 0 0 1-1.318.907l-.025.014-.008.004-.002.001c-.001 0-.002.001-.36-.658l-.361.658-.002-.001-.002-.001-.008-.005-.024-.014-.087-.05a10.541 10.541 0 0 1-1.236-.863c-.682-.555-1.552-1.415-1.886-2.474-.426-1.335.042-3.052 1.66-3.574l.005-.001a2.67 2.67 0 0 1 1.94.133m0 6.192-.36.658a.75.75 0 0 0 .72 0zm.002-.877a9 9 0 0 0 .766-.556c.626-.508 1.205-1.138 1.41-1.773.252-.79-.08-1.494-.687-1.69a1.15 1.15 0 0 0-1.04.175.75.75 0 0 1-.897.003 1.17 1.17 0 0 0-1.042-.177c-.608.198-.94.902-.688 1.69l.001.003c.196.621.771 1.25 1.402 1.762.289.235.565.427.775.563"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarLoveOutline;
