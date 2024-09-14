import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothCircleBulk = ({
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
      <Path d="m12.751 10.438.72-.576-.72-.573zM12.751 14.713l.72-.573-.72-.577z" />
      <Path d="M15.14 13.555a.75.75 0 0 1-.001 1.171l-2.67 2.13a.752.752 0 0 1-1.218-.586v-2.708l-1.452 1.163a.749.749 0 1 1-.937-1.17L10.802 12l-1.94-1.554a.75.75 0 1 1 .937-1.17l1.452 1.163V7.731a.75.75 0 0 1 1.218-.586l2.67 2.13a.747.747 0 0 1 .001 1.171L13.2 12zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.261-9.5-9.5-9.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.421 14.141a.75.75 0 0 0-.281-.586L13.2 12l1.94-1.554a.75.75 0 0 0-.001-1.171l-2.67-2.13a.75.75 0 0 0-1.218.586v2.708L9.799 9.276a.75.75 0 1 0-.937 1.17L10.802 12l-1.94 1.555a.749.749 0 1 0 .937 1.17l1.452-1.163v2.708a.75.75 0 0 0 1.218.586l2.67-2.13a.75.75 0 0 0 .282-.585m-1.95-4.279-.72.576V9.29zm0 4.278-.72.572v-1.149z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothCircleBulk;
