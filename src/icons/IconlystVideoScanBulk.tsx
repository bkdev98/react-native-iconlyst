import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoScanBulk = ({
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
      <Path d="M3.834 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.29a.75.75 0 0 0 0-1.5h-1.29a4.647 4.647 0 0 0-4.643 4.64v1.58c0 .414.336.75.75.75M8.984 20.25H7.727a3.145 3.145 0 0 1-3.143-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.643 4.64h1.257a.75.75 0 0 0 0-1.5M21.834 14.781a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.143 3.14h-1.289a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M17.941 2.251h-1.257a.75.75 0 0 0 0 1.5h1.257a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.317 13.775c0 .226.074.446.248.59l.619.508a.99.99 0 0 0 1.619-.766l.007-4.202a.989.989 0 0 0-1.618-.768l-.629.515c-.173.142-.246.36-.246.584zM13.17 7.719H9.417c-1.44 0-2.406 1.01-2.406 2.516v3.54c0 1.505.967 2.516 2.406 2.516h3.754c1.44 0 2.408-1.011 2.408-2.516v-3.54c0-1.505-.968-2.516-2.407-2.516"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoScanBulk;
