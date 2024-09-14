import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBulksharp = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.972 14.369c0 .945.88 1.715 1.96 1.716h4.573v-3.431h-4.574c-1.08 0-1.959.77-1.959 1.715"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.994 21.87V5.344h1.5v.007h15.13v-.007h1.5v.007h2.381v5.802h-4.574c-1.907 0-3.459 1.443-3.459 3.216.002 1.772 1.553 3.214 3.46 3.215h4.573v4.29H2.245v-.004zM6.56 11.169h6.933v-1.5H6.56z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.123 5.344V2.126L1.994 2.125v3.22h1.5v-1.72l15.13.001v1.718z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletBulksharp;
