import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallFavoriteBulk = ({
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
      d="M19.605 15.122c-.233-.223-.487-.464-.755-.733-1.242-1.238-2.313-.818-3.175-.481-1.018.402-1.983.777-3.74-.978-1.756-1.755-1.38-2.72-.981-3.74.338-.863.757-1.937-.485-3.18q-.403-.408-.738-.762c-.908-.955-1.564-1.645-2.493-1.655-.756-.03-1.64.495-2.89 1.747l-.088.09c-.277.27-1.013.992-1.02 2.397-.012 2.189 1.75 5.068 5.24 8.56 3.479 3.475 6.352 5.237 8.538 5.237h.024c1.405-.01 2.125-.744 2.396-1.022l.088-.085c1.247-1.248 1.752-2.083 1.743-2.888-.012-.931-.705-1.592-1.664-2.507"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.168 5.816c-.329 1.044-1.614 2.047-2.384 2.542-.766-.491-2.044-1.487-2.385-2.545a1.77 1.77 0 0 1 .023-1.183c.098-.24.307-.554.744-.694a1.3 1.3 0 0 1 1.166.193.746.746 0 0 0 .9.005c.335-.248.77-.323 1.165-.198.44.14.65.455.748.695.143.35.152.782.023 1.185m1.365-1.753a2.67 2.67 0 0 0-1.68-1.557 2.8 2.8 0 0 0-2.065.152 2.8 2.8 0 0 0-2.077-.152c-.773.247-1.369.8-1.678 1.558a3.24 3.24 0 0 0-.063 2.206h.001c.67 2.083 3.342 3.559 3.455 3.62a.74.74 0 0 0 .72-.001c.114-.062 2.803-1.56 3.452-3.62a3.24 3.24 0 0 0-.065-2.206"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallFavoriteBulk;
