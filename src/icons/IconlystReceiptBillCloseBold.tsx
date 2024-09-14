import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillCloseBold = ({
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
      d="M10.462 21.203a4.1 4.1 0 0 0 3.076-.002l2.144-.88a1.3 1.3 0 0 1 1.04.03l.758.367a1.69 1.69 0 0 0 1.644-.096c.498-.314.795-.855.794-1.445l-.01-12.26c0-2.725-1.635-4.418-4.266-4.418H8.343C5.686 2.499 4.1 4.15 4.1 6.917l-.018 12.26a1.69 1.69 0 0 0 .801 1.445 1.69 1.69 0 0 0 1.637.087l.749-.357a1.32 1.32 0 0 1 1.044-.03zm3.856-6.005H9.629a.75.75 0 1 1 0-1.5h4.689a.75.75 0 0 1 0 1.5m-1.352-3.23a.746.746 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-.969-.968.971-.971a.749.749 0 1 0-1.06-1.06l-.972.97-.972-.97a.749.749 0 1 0-1.06 1.06l.971.97-.969.97a.749.749 0 1 0 1.06 1.06l.97-.968z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillCloseBold;
