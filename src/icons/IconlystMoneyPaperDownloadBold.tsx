import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDownloadBold = ({
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
      d="M11.33 7.806q.012.009.025.016a.73.73 0 0 0 .79.145.8.8 0 0 0 .22-.145q.01-.007.024-.016l2.007-2a.75.75 0 0 0-1.058-1.063l-.729.727V3.125a.75.75 0 0 0-1.5 0v2.344l-.729-.726a.75.75 0 1 0-1.059 1.063zM12.001 13.965a1.402 1.402 0 0 0 0 2.8c.772 0 1.401-.628 1.401-1.4s-.629-1.4-1.4-1.4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.439 19.285H16.12a.75.75 0 0 1 0-1.5h1.319a.75.75 0 0 1 0 1.5m-5.437-1.02c-1.6 0-2.901-1.3-2.901-2.9a2.903 2.903 0 0 1 2.9-2.9c1.6 0 2.902 1.3 2.902 2.9s-1.303 2.9-2.902 2.9m-4.122-5.32H6.562a.75.75 0 0 1 0-1.5H7.88a.75.75 0 0 1 0 1.5m9.583-3.84H6.538c-2.093 0-3.498 1.467-3.498 3.65v5.22c0 2.183 1.406 3.65 3.499 3.65h10.923c2.092 0 3.496-1.466 3.496-3.65v-5.22c0-2.184-1.404-3.65-3.497-3.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperDownloadBold;
