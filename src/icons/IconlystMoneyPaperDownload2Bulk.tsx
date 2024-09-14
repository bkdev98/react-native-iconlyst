import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDownload2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.603 8.791H6.396c-2.137 0-3.574 1.499-3.574 3.73v5.36c0 2.231 1.438 3.73 3.576 3.73h11.205c2.138 0 3.575-1.499 3.575-3.73v-5.36c0-2.231-1.437-3.73-3.575-3.73"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 7.89c.028.028.065.042.097.065.047.035.09.074.144.097.09.038.19.059.29.059.024 0 .044-.012.067-.014a.8.8 0 0 0 .222-.044.8.8 0 0 0 .245-.165l2.052-2.06a.749.749 0 1 0-1.062-1.057l-.773.774V3.264a.75.75 0 0 0-1.5 0v2.283l-.773-.776a.75.75 0 0 0-1.063 1.058zM16.225 19.202h1.352a.75.75 0 0 0 0-1.5h-1.352a.75.75 0 0 0 0 1.5m-7.182-4A2.96 2.96 0 0 0 12 18.162a2.96 2.96 0 0 0 2.956-2.96 2.956 2.956 0 0 0-5.912 0m-2.62-2.5h1.351a.75.75 0 0 0 0-1.5H6.422a.75.75 0 0 0 0 1.5m4.12 2.5c0-.8.653-1.45 1.456-1.45a1.454 1.454 0 1 1 0 2.91 1.46 1.46 0 0 1-1.456-1.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperDownload2Bulk;
