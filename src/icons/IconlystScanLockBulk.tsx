import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLockBulk = ({
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
      <Path d="M21 14.78a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.142 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.643-4.64v-1.58a.75.75 0 0 0-.75-.75M8.15 20.25H6.89a3.144 3.144 0 0 1-3.142-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.646 4.646 0 0 0 4.642 4.64H8.15a.75.75 0 0 0 0-1.5M8.18 2.25H6.893a4.647 4.647 0 0 0-4.643 4.64v1.58a.75.75 0 0 0 1.5 0V6.89a3.145 3.145 0 0 1 3.143-3.14H8.18a.75.75 0 0 0 0-1.5M17.108 2.25H15.85a.75.75 0 0 0 0 1.5h1.258a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0V6.89a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.453 10.41a2.454 2.454 0 0 0-4.907 0c0 .81.397 1.52 1.002 1.97l-.76 2.29c-.222.67.279 1.36.988 1.36h2.448c.709 0 1.21-.69.987-1.36l-.76-2.29a2.45 2.45 0 0 0 1.002-1.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanLockBulk;
