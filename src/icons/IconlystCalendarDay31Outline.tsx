import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay31Outline = ({
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
      d="M16.225 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.954 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
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
      d="M8.356 10.742a.75.75 0 0 1 .75-.75h3.15a.75.75 0 0 1 .583 1.221l-1.105 1.37a2.554 2.554 0 0 1-1.288 4.762 2.55 2.55 0 0 1-1.808-.75.75.75 0 0 1 1.06-1.06 1.054 1.054 0 1 0 .747-1.8.75.75 0 0 1-.583-1.221l.825-1.022H9.106a.75.75 0 0 1-.75-.75M16.396 10.071a.75.75 0 0 1 .415.671v5.85a.75.75 0 0 1-1.5 0v-4.35l-.02.015a.75.75 0 1 1-.9-1.2l1.22-.915a.75.75 0 0 1 .785-.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay31Outline;
