import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay17Outline = ({
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
      d="M16.065 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.794 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.965 4.953c.919-.874 2.198-1.281 3.655-1.281h7.62c1.46 0 2.74.407 3.658 1.281.923.88 1.382 2.141 1.378 3.648v8.213c0 1.507-.461 2.77-1.384 3.65-.919.877-2.198 1.286-3.66 1.286H8.62c-1.461 0-2.742-.418-3.66-1.308-.922-.893-1.384-2.17-1.384-3.696V8.6c0-1.508.464-2.768 1.389-3.647M5.998 6.04c-.56.533-.922 1.362-.922 2.56v8.146c0 1.222.364 2.073.928 2.62.568.55 1.434.884 2.616.884h7.613c1.19 0 2.057-.33 2.623-.87.56-.535.92-1.367.92-2.566V8.598c.004-1.199-.354-2.027-.913-2.559-.564-.538-1.431-.867-2.623-.867H8.62c-1.187 0-2.055.329-2.622.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.505 10.143a.75.75 0 0 1 .75.75v5.355a.75.75 0 1 1-1.5 0v-5.355a.75.75 0 0 1 .75-.75M11.676 10.893a.75.75 0 0 1 .75-.75h3.377a.75.75 0 0 1 .716.972l-1.663 5.355a.75.75 0 1 1-1.432-.445l1.36-4.382h-2.359a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay17Outline;
