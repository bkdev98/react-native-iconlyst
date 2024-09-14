import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarPlusOutline = ({
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
      d="M3.818 9.664a.75.75 0 0 1 .75-.75h16.041a.75.75 0 0 1 0 1.5H4.568a.75.75 0 0 1-.75-.75M16.223 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.952 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.123 4.953c.92-.874 2.198-1.281 3.655-1.281h7.62c1.46 0 2.74.407 3.658 1.281.923.88 1.383 2.141 1.378 3.648v8.213c0 1.507-.46 2.77-1.384 3.65-.918.877-2.198 1.286-3.66 1.286H8.779c-1.461 0-2.742-.418-3.66-1.308-.922-.893-1.384-2.17-1.384-3.696V8.6c0-1.508.464-2.768 1.39-3.647M6.157 6.04c-.562.533-.923 1.362-.923 2.56v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.884 2.616.884h7.613c1.19 0 2.057-.33 2.623-.87.56-.535.92-1.367.92-2.566V8.598c.004-1.199-.354-2.027-.913-2.559-.564-.538-1.431-.867-2.623-.867h-7.62c-1.187 0-2.054.329-2.621.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.584 12.077a.75.75 0 0 1 .75.75v4.5a.75.75 0 1 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.584 15.077a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarPlusOutline;
