import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrustWalletBold = ({
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
      d="M8.6 9.06c.112 5.187.568 5.435 2.084 6.259.372.202.816.443 1.321.776.505-.333.95-.574 1.323-.777 1.479-.804 1.97-1.071 2.09-6.257-.843-.05-2.155-.26-3.414-1.117C10.747 8.8 9.441 9.01 8.601 9.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.044 16.636c-.463.25-.988.536-1.601.978a.75.75 0 0 1-.876 0c-.613-.441-1.137-.726-1.6-.978-2.16-1.174-2.786-1.802-2.88-8.301a.75.75 0 0 1 .217-.537c.176-.18.402-.222.696-.223.76 0 2.228-.066 3.525-1.146a.75.75 0 0 1 .96 0c1.39 1.162 2.994 1.146 3.597 1.146l.1-.001a.75.75 0 0 1 .75.762c-.1 6.497-.727 7.125-2.888 8.3m2.173-14.131H7.782c-3.16 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrustWalletBold;
