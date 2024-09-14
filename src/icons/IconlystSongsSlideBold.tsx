import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsSlideBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3 6.715a.75.75 0 0 0-.75.75v9.068a.75.75 0 0 0 1.5 0V7.465a.75.75 0 0 0-.75-.75M21 6.715a.75.75 0 0 0-.75.75v9.068a.75.75 0 0 0 1.5 0V7.465a.75.75 0 0 0-.75-.75M12.4 13.723a.977.977 0 0 0-1.951.005c0 .538.438.976.976.976a.98.98 0 0 0 .976-.974l-.001-.003z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.54 10.108a.75.75 0 0 1-.884.585 2.8 2.8 0 0 1-.756-.269v3.304a2.48 2.48 0 0 1-2.476 2.476 2.48 2.48 0 0 1-2.475-2.476 2.48 2.48 0 0 1 2.476-2.476c.346 0 .675.073.975.202V8.545a.75.75 0 0 1 1.451-.269c.01.026.33.789 1.105.947a.75.75 0 0 1 .585.885m-.594-6.609h-5.94a3.604 3.604 0 0 0-3.601 3.6V16.9a3.605 3.605 0 0 0 3.6 3.601h5.94c1.985 0 3.6-1.615 3.6-3.601V7.099c0-1.985-1.615-3.6-3.6-3.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsSlideBold;
