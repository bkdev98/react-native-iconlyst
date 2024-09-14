import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentScanTwoTone = ({
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
      d="M20.144 11.997V9a2.05 2.05 0 0 0-.572-1.42l-3.791-3.95A2.05 2.05 0 0 0 14.3 3h-5.65A3.747 3.747 0 0 0 4.89 6.658v5.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.785 3.063v2.892a2.56 2.56 0 0 0 2.554 2.561h2.74M21.314 11.996H3.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.143 15.273v1.894A3.826 3.826 0 0 1 16.485 21H8.56a3.763 3.763 0 0 1-3.678-3.834v-1.894"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentScanTwoTone;
