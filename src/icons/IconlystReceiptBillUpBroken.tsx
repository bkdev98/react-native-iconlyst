import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillUpBroken = ({
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
      d="m10.889 21-2.175-.889a1.81 1.81 0 0 0-1.465.043l-.771.369A1.22 1.22 0 0 1 4.73 19.42l.005-6.218M19.77 11.274v-4.29c0-2.46-1.338-3.984-3.8-3.984H8.563C6.108 3 4.74 4.524 4.74 6.983l-.003 3.11M17.355 14.86V21m0-6.14-2.415 2.425m2.415-2.426 2.415 2.426M14.358 9.043h-4.97m3.313 3.86H9.389"
    />
  </Svg>
);
export default IconlystReceiptBillUpBroken;
