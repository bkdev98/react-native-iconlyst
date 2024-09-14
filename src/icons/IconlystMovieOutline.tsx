import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieOutline = ({
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
      d="M3.743 4.371c.933-1 2.26-1.559 3.823-1.559H16.6c1.566 0 2.894.559 3.826 1.56.927.995 1.407 2.367 1.407 3.902v7.45c0 1.535-.48 2.907-1.407 3.902-.932 1.001-2.26 1.56-3.827 1.56H7.566c-1.567 0-2.894-.559-3.826-1.56-.927-.995-1.406-2.367-1.406-3.902v-7.45c0-1.536.482-2.908 1.41-3.903m1.098 1.023c-.626.671-1.007 1.655-1.007 2.88v7.45c0 1.226.38 2.21 1.004 2.88.618.665 1.532 1.082 2.728 1.082H16.6c1.196 0 2.11-.418 2.73-1.082.624-.67 1.004-1.654 1.004-2.88v-7.45c0-1.226-.38-2.21-1.004-2.88-.62-.664-1.533-1.082-2.73-1.082H7.567c-1.192 0-2.106.417-2.725 1.082"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.334 8.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.023 2.893a.75.75 0 0 1 1.004.343l2.417 4.93a.75.75 0 1 1-1.347.66L9.68 3.897a.75.75 0 0 1 .343-1.003m4.45 0a.75.75 0 0 1 1.004.343l2.418 4.93a.75.75 0 0 1-1.347.66l-2.417-4.93a.75.75 0 0 1 .343-1.003m-8.762.227a.75.75 0 0 1 1.003.346l2.289 4.702a.75.75 0 0 1-1.349.657l-2.29-4.702a.75.75 0 0 1 .347-1.003"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieOutline;
