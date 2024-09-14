import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlueberryTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Circle cx={8.239} cy={13.729} r={5.239} />
      <Path d="M10.678 9.002a5.239 5.239 0 1 1 2.747 5.96" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.38 11.17a3 3 0 0 0 0 2.503 3 3 0 0 0-2.503 0 3 3 0 0 0 0-2.504c.795.365 1.71.365 2.504 0M16.365 8.25a1.45 1.45 0 0 0 0 1.208 1.45 1.45 0 0 0-1.207 0 1.45 1.45 0 0 0 0-1.208c.383.176.824.176 1.207 0"
    />
  </Svg>
);
export default IconlystBlueberryTwoTone;
