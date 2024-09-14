import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanBulk = ({
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
      <Path d="M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.258a3.147 3.147 0 0 1 3.143 3.143v1.08a.75.75 0 0 0 1.5 0v-1.08a4.65 4.65 0 0 0-4.643-4.643M3 8.723a.75.75 0 0 0 .75-.75v-1.08A3.147 3.147 0 0 1 6.893 3.75h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 6.893v1.08c0 .414.336.75.75.75M8.15 20.25H6.892a3.146 3.146 0 0 1-3.142-3.143v-1.08a.75.75 0 0 0-1.5 0v1.08a4.65 4.65 0 0 0 4.642 4.643H8.15a.75.75 0 0 0 0-1.5M21 15.277a.75.75 0 0 0-.75.75v1.08a3.146 3.146 0 0 1-3.142 3.143h-1.29a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.642-4.643v-1.08a.75.75 0 0 0-.75-.75" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.717 14.171a1 1 0 0 0 1-1v-2.347a1 1 0 0 0-1-1h-1.173a1 1 0 0 0-1 1v2.347a1 1 0 0 0 1 1zM13.85 9.825a1 1 0 0 0-1 1v2.347a1 1 0 1 0 2 0v-2.347a1 1 0 0 0-1-1M10.152 9.825H8.978a1 1 0 0 0-1 1v2.347a1 1 0 0 0 1 1h1.174a1 1 0 0 0 1-1v-2.347a1 1 0 0 0-1-1M4.281 10.825v2.347a1 1 0 1 0 2 0v-2.347a1 1 0 1 0-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarcodeScanBulk;
