import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillAiAltTwoTone = ({
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
      d="m10.221 21-2.174-.889a1.82 1.82 0 0 0-1.467.043l-.77.369a1.22 1.22 0 0 1-1.748-1.102l.01-12.438C4.072 4.523 5.44 3 7.895 3h7.408c2.462 0 3.8 1.524 3.8 3.983v4.291"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.69 8.402H8.72M12 11.394H8.72M16.815 14.74l.122.33a4.53 4.53 0 0 0 2.675 2.678l.328.122-.328.122a4.53 4.53 0 0 0-2.675 2.679l-.122.329-.122-.33a4.53 4.53 0 0 0-2.675-2.678l-.328-.122.328-.122a4.53 4.53 0 0 0 2.675-2.679z"
    />
  </Svg>
);
export default IconlystReceiptBillAiAltTwoTone;
