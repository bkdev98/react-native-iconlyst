import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillEditBulk = ({
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
      d="m10.094 21.164-2.143-.875a1.28 1.28 0 0 0-1.04.03l-.758.363a1.7 1.7 0 0 1-1.642-.093 1.7 1.7 0 0 1-.795-1.446L3.725 6.89c0-2.73 1.635-4.424 4.266-4.424h7.299c2.657 0 4.243 1.654 4.243 4.424l.008 5.258c0 .23-.252.38-.469.3a3.1 3.1 0 0 0-1.197-.18 3.14 3.14 0 0 0-2.2 1.021l-3.193 3.526a3.98 3.98 0 0 0-.99 2.228l-.097.868c-.04.383-.006.761.095 1.117.06.211-.086.44-.304.415a4.1 4.1 0 0 1-1.092-.28"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.418 21.178a1.3 1.3 0 0 0 1.113.339l.833-.14a2.4 2.4 0 0 0 1.378-.758l3.139-3.465c.274-.298.418-.685.401-1.091a1.5 1.5 0 0 0-.485-1.058l-.767-.71a1.58 1.58 0 0 0-1.091-.404 1.52 1.52 0 0 0-1.06.49l-3.184 3.516c-.328.368-.537.84-.588 1.325l-.095.86a1.3 1.3 0 0 0 .406 1.096"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.218 9.316H8.362a.75.75 0 1 1 0-1.5h4.856a.75.75 0 0 1 0 1.5M11.6 13.087H8.362a.749.749 0 1 1 0-1.5H11.6a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillEditBulk;
