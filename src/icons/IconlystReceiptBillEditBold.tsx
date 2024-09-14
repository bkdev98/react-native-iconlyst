import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillEditBold = ({
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
      d="m10.094 21.164-2.143-.875a1.28 1.28 0 0 0-1.04.03l-.758.363a1.7 1.7 0 0 1-1.642-.093 1.7 1.7 0 0 1-.795-1.446L3.725 6.89c0-2.73 1.635-4.424 4.266-4.424h7.299c2.657 0 4.243 1.654 4.243 4.424l.008 5.258c0 .23-.252.38-.468.3a3.1 3.1 0 0 0-1.197-.18 3.14 3.14 0 0 0-2.201 1.021l-3.193 3.526a3.98 3.98 0 0 0-.99 2.228l-.096.868c-.04.383-.007.761.094 1.117.06.211-.086.44-.304.415a4.1 4.1 0 0 1-1.092-.28m3.124-11.848H8.362a.75.75 0 1 1 0-1.5h4.856a.75.75 0 0 1 0 1.5M11.6 13.087H8.362a.749.749 0 1 1 0-1.5H11.6a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.312 21.534c-.331 0-.648-.125-.894-.357a1.3 1.3 0 0 1-.405-1.095l.094-.86c.052-.486.26-.958.589-1.326l3.183-3.516a1.52 1.52 0 0 1 1.06-.49c.407 0 .794.13 1.092.404l.766.71c.298.276.47.652.486 1.058s-.127.793-.402 1.091l-3.138 3.465a2.4 2.4 0 0 1-1.378.758l-.834.14a1.4 1.4 0 0 1-.22.018"
    />
  </Svg>
);
export default IconlystReceiptBillEditBold;
