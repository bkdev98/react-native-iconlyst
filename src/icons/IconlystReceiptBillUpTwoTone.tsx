import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillUpTwoTone = ({
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
      d="m11.14 21-2.175-.889a1.81 1.81 0 0 0-1.466.043l-.771.369A1.22 1.22 0 0 1 4.98 19.42l.01-12.438C4.99 4.523 6.358 3 8.813 3h7.408c2.462 0 3.8 1.524 3.8 3.983v4.291"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.605 14.86V21m0-6.14-2.415 2.425m2.415-2.426 2.415 2.426M14.608 9.043h-4.97m3.313 3.86H9.639"
    />
  </Svg>
);
export default IconlystReceiptBillUpTwoTone;
