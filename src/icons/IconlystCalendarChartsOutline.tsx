import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarChartsOutline = ({
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
      fillRule="evenodd"
      d="M5.04 5.072c.918-.874 2.197-1.281 3.654-1.281h7.62c1.46 0 2.74.407 3.658 1.282.923.88 1.383 2.14 1.378 3.648v8.212c0 1.507-.46 2.77-1.384 3.651-.918.877-2.198 1.287-3.66 1.287H8.695c-1.461 0-2.742-.419-3.66-1.31-.922-.893-1.384-2.17-1.384-3.696V8.72c0-1.509.464-2.769 1.39-3.648m1.033 1.087c-.561.533-.923 1.363-.923 2.56v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.886 2.616.886h7.613c1.19 0 2.057-.331 2.623-.872.56-.535.92-1.367.92-2.566V8.718c.004-1.199-.354-2.027-.913-2.56-.564-.538-1.431-.867-2.623-.867h-7.62c-1.187 0-2.054.329-2.621.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.87 2.37a.75.75 0 0 1 .75.75v2.576a.75.75 0 0 1-1.5 0V3.119a.75.75 0 0 1 .75-.75m7.27 0a.75.75 0 0 1 .75.75v2.576a.75.75 0 0 1-1.5 0V3.119a.75.75 0 0 1 .75-.75M16.464 13.886a.75.75 0 0 1 .75.75v2.093a.75.75 0 0 1-1.5 0v-2.093a.75.75 0 0 1 .75-.75M11.235 13.12a.75.75 0 0 1 .75.75v2.86a.75.75 0 0 1-1.5 0v-2.86a.75.75 0 0 1 .75-.75M13.85 15.206a.75.75 0 0 1 .75.75v.773a.75.75 0 0 1-1.5 0v-.773a.75.75 0 0 1 .75-.75M8.544 15.206a.75.75 0 0 1 .75.75v.773a.75.75 0 0 1-1.5 0v-.773a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.312 8.383a.75.75 0 0 1 .04 1.06l-2.7 2.906a.75.75 0 0 1-.96.117l-2.615-1.712-2.328 2.522a.75.75 0 0 1-1.102-1.017l2.758-2.99a.75.75 0 0 1 .962-.118l2.617 1.713 2.269-2.442a.75.75 0 0 1 1.06-.039"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarChartsOutline;
