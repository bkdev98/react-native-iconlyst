import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotGraphLineBulk = ({
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
      d="M19.386 4.164a2.12 2.12 0 0 0-2.114 2.12c0 .33.082.637.218.915l-2.232 2.655a2.1 2.1 0 0 0-.769-.15c-.276 0-.539.057-.78.154l-2.237-2.63a2.1 2.1 0 0 0 .233-.944 2.12 2.12 0 0 0-2.114-2.12 2.12 2.12 0 0 0-2.114 2.12c0 .343.09.662.236.95L5.38 10.041a2.1 2.1 0 0 0-.766-.149A2.115 2.115 0 0 0 2.5 12.004a2.114 2.114 0 0 0 4.228 0c0-.344-.091-.664-.237-.95l2.333-2.809c.238.093.495.148.767.148.274 0 .534-.056.774-.15l2.242 2.636a2.1 2.1 0 0 0-.232.945v.012a2.115 2.115 0 0 0 4.228-.012 2.1 2.1 0 0 0-.238-.956l2.215-2.635a2.114 2.114 0 1 0 .806-4.069"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.615 16.467a.75.75 0 0 0-.75.75v1.87a.75.75 0 0 0 1.5 0v-1.87a.75.75 0 0 0-.75-.75M9.59 12.547a.75.75 0 0 0-.75.75v5.79a.75.75 0 0 0 1.5 0v-5.79a.75.75 0 0 0-.75-.75M14.489 16.287a.75.75 0 0 0-.75.75v2.05a.75.75 0 0 0 1.5 0v-2.05a.75.75 0 0 0-.75-.75M19.385 12.547a.75.75 0 0 0-.75.75v5.79a.75.75 0 0 0 1.5 0v-5.79a.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystDotGraphLineBulk;