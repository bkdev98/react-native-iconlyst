import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeSquareBold = ({
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
      d="M14.767 9.823a.75.75 0 0 1 0 1.5H13.47a3.05 3.05 0 0 1-2.219 2.29l2.082 2.08a.751.751 0 0 1-1.06 1.06L9 13.484a.749.749 0 0 1 .53-1.28h.983c.611 0 1.136-.361 1.384-.88H9.529a.75.75 0 0 1 0-1.5h2.269a1.54 1.54 0 0 0-1.286-.7h-.983a.75.75 0 0 1 0-1.5h5.238a.75.75 0 0 1 0 1.5h-1.65a3 3 0 0 1 .301.7zm1.45-7.26H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRupeeSquareBold;
