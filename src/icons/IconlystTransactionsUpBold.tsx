import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsUpBold = ({
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
      d="M17.137 14.01h-2.481a.75.75 0 1 1 0-1.5h2.481a.75.75 0 0 1 0 1.5m-2 3H8.866a.75.75 0 1 1 0-1.5h6.271a.75.75 0 0 1 0 1.5M12.5 2.5C7.262 2.5 3 6.762 3 12c0 .829.118 1.629.318 2.396l4.481-4.599a.75.75 0 0 1 .532-.226h.005c.198 0 .389.079.53.218l1.763 1.76 3.156-3.292-.999.003h-.003a.75.75 0 0 1-.002-1.5l2.748-.01h.016c.025 0 .047.012.071.014a.8.8 0 0 1 .21.042c.031.012.054.036.082.052.055.031.112.056.159.101l.006.009.002.001c.011.011.015.027.026.039a.74.74 0 0 1 .194.492l.004 2.769a.75.75 0 0 1-.749.751h-.001a.75.75 0 0 1-.75-.749l-.001-.905-3.616 3.773a.75.75 0 0 1-.532.231c-.226-.012-.396-.077-.538-.218l-1.768-1.764-4.464 4.581c1.507 3.259 4.8 5.531 8.62 5.531 5.239 0 9.5-4.261 9.5-9.5s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsUpBold;
