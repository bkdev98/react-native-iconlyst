import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothBulk = ({
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
      d="M11.533 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1.625-.78l5.621 4.5a.998.998 0 0 1 0 1.562l-4.65 3.714 4.65 3.724a.997.997 0 0 1 0 1.56l-5.62 4.5a1 1 0 0 1-.626.22m1-12.088v-4.83l3.02 2.418zm0 9.007v-4.837l3.021 2.418z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m7.47 16.522 3.063-2.444V9.92L7.471 7.47a1.004 1.004 0 0 0-1.407.155 1 1 0 0 0 .157 1.406L9.931 12l-3.71 2.96a1 1 0 0 0 1.25 1.563"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBluetoothBulk;
