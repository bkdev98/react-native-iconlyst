import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestBold = ({
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
      d="M16.217 3.009H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h.17c.14 0 .262-.096.292-.233a1106 1106 0 0 1 1.541-6.77L9.788 15l.572-2.437a.75.75 0 1 1 1.461.342l-.56 2.383c-.094.617.037 1.149.386 1.539.375.42.967.625 1.634.598 1.991-.106 3.065-2.048 3.065-3.821 0-2.246-1.796-3.94-4.178-3.94-2.49 0-4.515 1.745-4.515 3.89 0 .33.047.658.143.975.072.242.172.478.289.684a.75.75 0 1 1-1.303.742 4.876 4.876 0 0 1-.629-2.401c0-2.972 2.698-5.39 6.015-5.39 3.237 0 5.678 2.339 5.678 5.44 0 2.463-1.572 5.164-4.486 5.319a4 4 0 0 1-.211.005 3.57 3.57 0 0 1-2.094-.648c-.192-.138-.483-.053-.537.177l-.747 3.184a.3.3 0 0 0 .292.369h6.153c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinterestBold;
