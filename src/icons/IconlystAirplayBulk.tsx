import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirplayBulk = ({
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
      d="M17.805 2.703H7.862a4.534 4.534 0 0 0-4.528 4.53v5.46a4.536 4.536 0 0 0 4.187 4.517.56.56 0 0 0 .515-.28c.472-.791 1.752-2.94 1.974-3.326a3.28 3.28 0 0 1 2.835-1.636h.009a3.3 3.3 0 0 1 2.843 1.654c.214.376 1.469 2.513 1.934 3.305a.56.56 0 0 0 .517.283 4.537 4.537 0 0 0 4.186-4.518v-5.46a4.535 4.535 0 0 0-4.529-4.529"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.96 14.613a1.27 1.27 0 0 0-1.112-.647c-.469-.047-.875.236-1.106.634l-2.754 4.781c-.232.4-.23.879 0 1.28.232.4.645.639 1.107.639h5.474c.46 0 .873-.238 1.105-.636.233-.401.235-.879.007-1.281z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirplayBulk;
