import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillUpLight = ({
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
      d="m10.64 21-2.175-.889a1.81 1.81 0 0 0-1.466.043l-.771.369A1.22 1.22 0 0 1 4.48 19.42l.01-12.438C4.49 4.523 5.858 3 8.313 3h7.408c2.462 0 3.8 1.524 3.8 3.983v4.291M17.105 14.86V21m0-6.14-2.415 2.425m2.415-2.426 2.415 2.426M14.108 9.043h-4.97m3.313 3.86H9.139"
    />
  </Svg>
);
export default IconlystReceiptBillUpLight;
