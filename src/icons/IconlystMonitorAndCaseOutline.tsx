import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndCaseOutline = ({
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
      d="M13.045 7.446a3.227 3.227 0 0 1 3.227-3.227h2.5A3.226 3.226 0 0 1 22 7.445v9.108a3.226 3.226 0 0 1-3.225 3.226l-2.502.001a3.227 3.227 0 0 1-3.226-3.227zm1.5 0v9.107c0 .954.774 1.727 1.727 1.727h2.501c.953 0 1.727-.773 1.727-1.727l-.001-9.108c0-.953-.773-1.726-1.726-1.726h-2.5c-.955 0-1.728.773-1.728 1.727M5.355 6.398C4.607 6.398 4 7.005 4 7.753v6.177c0 .748.607 1.354 1.355 1.354h5.578a.75.75 0 1 1 0 1.5H5.355A2.855 2.855 0 0 1 2.5 13.93V7.753a2.855 2.855 0 0 1 2.855-2.855h5.578a.75.75 0 1 1 0 1.5zM5.664 18.793a.75.75 0 0 1 .75-.75h4.519a.75.75 0 0 1 0 1.5H6.414a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.523 15.506a.75.75 0 0 1 .75.75v.07a.75.75 0 1 1-1.5 0v-.07a.75.75 0 0 1 .75-.75M15.5 9.375a.75.75 0 0 1 .75-.75h2.545a.75.75 0 0 1 0 1.5H16.25a.75.75 0 0 1-.75-.75M15.5 11.875a.75.75 0 0 1 .75-.75h2.545a.75.75 0 0 1 0 1.5H16.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorAndCaseOutline;
