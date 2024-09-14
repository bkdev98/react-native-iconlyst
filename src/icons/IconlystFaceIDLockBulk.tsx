import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLockBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.149 20.575H6.892a3.145 3.145 0 0 1-3.143-3.14v-1.569a.75.75 0 0 0-1.5 0v1.57a4.647 4.647 0 0 0 4.643 4.64h1.257a.75.75 0 0 0 0-1.5M21.001 15.116a.75.75 0 0 0-.75.75v1.57c0 1.731-1.41 3.14-3.143 3.14h-1.289a.75.75 0 0 0 0 1.5h1.289a4.647 4.647 0 0 0 4.643-4.64v-1.57a.75.75 0 0 0-.75-.75M2.999 9.545a.75.75 0 0 0 .75-.75v-1.57a3.15 3.15 0 0 1 3.143-3.15h1.289a.75.75 0 0 0 0-1.5H6.892a4.65 4.65 0 0 0-4.643 4.65v1.57c0 .414.336.75.75.75M17.108 2.575H15.85a.75.75 0 0 0 0 1.5h1.257a3.15 3.15 0 0 1 3.143 3.15v1.571a.75.75 0 0 0 1.5 0v-1.57a4.65 4.65 0 0 0-4.643-4.65" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.98 8.566h.012c.775 0 1.41.626 1.42 1.391v.51H10.59v-.508a1.414 1.414 0 0 1 1.39-1.393m4.378 6.48v-2.04a2.54 2.54 0 0 0-1.445-2.28v-.779a2.927 2.927 0 0 0-2.928-2.88h-.025a2.91 2.91 0 0 0-2.871 2.88v.78a2.54 2.54 0 0 0-1.446 2.28v2.04a2.547 2.547 0 0 0 2.547 2.54h3.622a2.546 2.546 0 0 0 2.546-2.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDLockBulk;
