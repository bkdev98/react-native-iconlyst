import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerprintScanBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.29a.75.75 0 0 0 0-1.5h-1.29A4.647 4.647 0 0 0 2.25 6.89v1.58c0 .414.336.75.75.75M8.15 20.25H6.893a3.145 3.145 0 0 1-3.143-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.643 4.64H8.15a.75.75 0 0 0 0-1.5M21 14.781a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.142 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.646 4.646 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M17.107 2.251H15.85a.75.75 0 0 0 0 1.5h1.257a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.218 6.79a5.6 5.6 0 0 0-2.216-.45A5.74 5.74 0 0 0 7.02 9.245a.998.998 0 0 0 .868 1.494 1 1 0 0 0 .87-.506 3.74 3.74 0 0 1 3.244-1.893c.5 0 .98.097 1.43.29a1 1 0 0 0 .786-1.84M6.271 15.59a1 1 0 1 0 2 0v-2.932a1 1 0 0 0-2 0zM15.73 15.58a1 1 0 1 0 2 0v-3.511a5.7 5.7 0 0 0-1.046-3.297 1.002 1.002 0 0 0-1.634 1.155c.445.63.68 1.37.68 2.142z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.96 9.38a2.87 2.87 0 0 0-2.862 2.87v.5a1 1 0 1 0 2 0v-.5c0-.48.387-.87.862-.87.476 0 .863.39.863.87v4.409a1 1 0 1 0 2 0v-4.41a2.87 2.87 0 0 0-2.863-2.87"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.098 14.445a1 1 0 0 0-1 1v1.214a1 1 0 1 0 2 0v-1.214a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFingerprintScanBulk;
