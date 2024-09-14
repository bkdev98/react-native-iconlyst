import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinScanBulk = ({
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
      <Path d="M21.498 14.785a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.143 3.14h-1.289a.75.75 0 0 0 0 1.5h1.289a4.647 4.647 0 0 0 4.643-4.64v-1.58a.75.75 0 0 0-.75-.75M8.65 20.255H7.392a3.145 3.145 0 0 1-3.142-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.642 4.64H8.65a.75.75 0 0 0 0-1.5M3.5 9.225a.75.75 0 0 0 .75-.75v-1.58c0-1.732 1.41-3.14 3.143-3.14h1.289a.75.75 0 0 0 0-1.5H7.393a4.647 4.647 0 0 0-4.643 4.64v1.58c0 .414.336.75.75.75M17.607 2.255H16.35a.75.75 0 0 0 0 1.5h1.258a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.418 13.004h1.836c.564 0 1.063.416 1.113.924a1.034 1.034 0 0 1-1.025 1.136h-1.924zm0-4.06h1.836c.564 0 1.063.415 1.113.924a1.03 1.03 0 0 1-1.025 1.136h-1.924zm4.164 7.128c.573-.63.857-1.48.775-2.334a2.93 2.93 0 0 0-.791-1.71l.016-.015a3.05 3.05 0 0 0 .775-2.336C16.218 8.235 15 7.1 13.531 6.97v-.225a1 1 0 1 0-2 0v.2h-1.113a1 1 0 0 0-1 1v8.12a1 1 0 0 0 1 1h1.113v.2a1 1 0 0 0 2 0v-.22a3.03 3.03 0 0 0 2.051-.972"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinScanBulk;
