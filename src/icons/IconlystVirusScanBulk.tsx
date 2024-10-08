import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusScanBulk = ({
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
      <Path d="M2.999 9.545a.75.75 0 0 0 .75-.75v-1.57a3.15 3.15 0 0 1 3.143-3.15H8.18a.75.75 0 0 0 0-1.5H6.89a4.65 4.65 0 0 0-4.642 4.65v1.57c0 .414.336.75.75.75M20.997 15.116a.75.75 0 0 0-.75.75v1.57c0 1.731-1.41 3.14-3.143 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.643-4.64v-1.57a.75.75 0 0 0-.75-.75M17.108 2.575H15.85a.75.75 0 0 0 0 1.5h1.258a3.15 3.15 0 0 1 3.143 3.15v1.571a.75.75 0 0 0 1.5 0v-1.57a4.65 4.65 0 0 0-4.643-4.65M8.15 20.575H6.89a3.144 3.144 0 0 1-3.142-3.14v-1.569a.75.75 0 0 0-1.5 0v1.57a4.646 4.646 0 0 0 4.642 4.64H8.15a.75.75 0 0 0 0-1.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.387 15.509c.385.155.657.486.727.874l.114.71a.75.75 0 0 0 1.48-.238l-.116-.722a2.67 2.67 0 0 0-1.647-2.017l-.593-.236v-.576c.685-.043 1.311-.047 2.016.236a.75.75 0 1 0 .557-1.392c-1.005-.403-1.89-.39-2.688-.34a4 4 0 0 0-.063-.203l.766-.301a2.65 2.65 0 0 0 1.647-2.024l.122-.71a.75.75 0 1 0-1.478-.253l-.122.712a1.15 1.15 0 0 1-.713.876l-1.088.428a4 4 0 0 0-.15-.125v-.874c0-1.185-.968-2.15-2.158-2.15s-2.158.965-2.158 2.15v.87q-.079.062-.155.129l-1.092-.43a1.14 1.14 0 0 1-.709-.875l-.12-.71a.75.75 0 0 0-1.479.252l.121.709a2.64 2.64 0 0 0 1.643 2.023l.77.303a3 3 0 0 0-.063.204c-.797-.051-1.68-.064-2.686.339a.75.75 0 0 0-.418.974.75.75 0 0 0 .974.418c.706-.282 1.331-.28 2.015-.236v.579l-.596.234a2.63 2.63 0 0 0-1.637 2.018l-.124.71a.751.751 0 0 0 1.48.258l.124-.72c.063-.392.331-.72.712-.872l.28-.11a3 3 0 0 0 2.751 1.823h.73a2.99 2.99 0 0 0 2.751-1.823z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVirusScanBulk;
