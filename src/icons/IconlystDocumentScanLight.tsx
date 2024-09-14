import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentScanLight = ({
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
      d="M19.643 11.997V9a2.05 2.05 0 0 0-.572-1.42L15.28 3.63A2.05 2.05 0 0 0 13.8 3H8.15a3.747 3.747 0 0 0-3.761 3.658v5.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.285 3.063v2.892a2.56 2.56 0 0 0 2.554 2.561h2.74M20.814 11.996H3.186M19.643 15.273v1.894A3.826 3.826 0 0 1 15.985 21H8.06a3.763 3.763 0 0 1-3.678-3.834v-1.894"
    />
  </Svg>
);
export default IconlystDocumentScanLight;
