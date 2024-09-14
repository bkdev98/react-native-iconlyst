import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCashBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.761 15.475-.117-.297a2.67 2.67 0 0 0 .992-3.183 2.64 2.64 0 0 0-1.416-1.462 2 2 0 0 0-.238-.079l-.067-.02a2.28 2.28 0 0 0-.07-1.448 2.28 2.28 0 0 0-1.229-1.27 2.3 2.3 0 0 0-.989-.18l-.145-.37a.75.75 0 1 0-1.397.546l.097.247-.565.223-.095-.238a.75.75 0 0 0-1.395.553l.094.237-.135.053-.014.003q-.008 0-.015.003l-.013.008-.01.007-.52.205a.75.75 0 0 0-.422.973.74.74 0 0 0 .808.452l2.016 5.104a.74.74 0 0 0-.284.884.75.75 0 0 0 .974.42l.71-.28.091.23a.751.751 0 0 0 1.395-.552l-.09-.23.561-.223.093.235a.75.75 0 1 0 1.395-.551m-3.35-6.389-2.103.83.596 1.51 2.105-.852a.803.803 0 0 0 .013-1.48.8.8 0 0 0-.611-.008m-.112 5.873-.844-2.137 2.284-.924c.287-.115.603-.111.886.012s.503.348.615.634a1.154 1.154 0 0 1-.653 1.509l-2.115.838h-.006l-.006.002-.004.002-.006.004z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCashBulk;
