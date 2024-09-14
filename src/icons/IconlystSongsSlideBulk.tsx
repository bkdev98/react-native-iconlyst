import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsSlideBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.57 6.715a.75.75 0 0 0-.75.75v9.068a.75.75 0 0 0 1.5 0V7.465a.75.75 0 0 0-.75-.75M21.57 6.715a.75.75 0 0 0-.75.75v9.068a.75.75 0 0 0 1.5 0V7.465a.75.75 0 0 0-.75-.75M15.516 3.499h-5.94a3.604 3.604 0 0 0-3.601 3.6V16.9a3.605 3.605 0 0 0 3.6 3.601h5.94c1.986 0 3.6-1.615 3.6-3.601V7.099c0-1.985-1.614-3.6-3.6-3.6" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.11 10.108a.75.75 0 0 1-.884.585 2.8 2.8 0 0 1-.755-.269l-.001 3.294v.01a2.48 2.48 0 0 1-2.475 2.476 2.48 2.48 0 0 1-2.476-2.476 2.48 2.48 0 0 1 2.476-2.476c.347 0 .676.073.976.202V8.545a.75.75 0 0 1 1.451-.269c.01.026.329.79 1.104.947a.75.75 0 0 1 .585.885m-4.115 2.644c.536 0 .972.435.975.971v.004l.001.003a.98.98 0 0 1-.976.974.977.977 0 0 1-.976-.976c0-.538.438-.976.976-.976"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsSlideBulk;
