import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanDeliveryBoxBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.847 15.53v1.578a3.89 3.89 0 0 1-3.893 3.891h-1.289M3.85 15.53v1.578a3.89 3.89 0 0 0 3.892 3.891H9M3.85 8.47V6.892A3.89 3.89 0 0 1 7.742 3h1.29M21.85 8.47V6.892A3.89 3.89 0 0 0 17.955 3H16.7M8.527 10.237c0-.454.243-.874.637-1.102l3.047-1.76a1.27 1.27 0 0 1 1.273 0l3.047 1.76c.394.228.636.648.636 1.102v3.52c0 .454-.242.874-.636 1.101l-3.047 1.76a1.28 1.28 0 0 1-1.273 0l-3.047-1.76a1.27 1.27 0 0 1-.637-1.101v-.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.707 9.586 4.14 2.394 4.138-2.394M12.85 14.123v-2.145"
    />
  </Svg>
);
export default IconlystScanDeliveryBoxBroken;
