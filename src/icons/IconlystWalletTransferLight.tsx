import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletTransferLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 14.24h-3.547a2.359 2.359 0 0 1 0-4.717h3.546M17.285 11.829h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.23 9.887v-1.03c0-2.54 2.06-4.6 4.599-4.6h7.573c2.539 0 4.598 2.06 4.598 4.6v6.288a4.6 4.6 0 0 1-4.598 4.598h-2.316M9.363 19.636v-5.554M11.097 17.965l-1.733 1.672-1.733-1.672M4.734 14.082v5.554M3 15.754l1.733-1.672 1.733 1.672"
    />
  </Svg>
);
export default IconlystWalletTransferLight;
