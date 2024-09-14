import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalCircleBulk = ({
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
      d="M12 2.688c-5.239 0-9.5 4.262-9.5 9.5 0 5.237 4.261 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.396 15.023h-5.321l.889 1.229a.748.748 0 0 1-.606 1.19.75.75 0 0 1-.608-.31l-1.752-2.42a.751.751 0 0 1 .607-1.19h6.791a.75.75 0 0 1 0 1.5M8.605 9.348h5.321l-.89-1.227a.75.75 0 0 1 1.214-.881l1.753 2.418a.751.751 0 0 1-.607 1.19H8.605a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapHorizontalCircleBulk;
