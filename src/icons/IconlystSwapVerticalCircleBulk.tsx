import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalCircleBulk = ({
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
      d="M14.838 8.791v5.321l1.229-.889a.748.748 0 0 1 1.19.606.75.75 0 0 1-.31.608l-2.42 1.752a.751.751 0 0 1-1.19-.607V8.791a.75.75 0 0 1 1.5 0m-5.675 6.791v-5.321l-1.227.89a.75.75 0 0 1-.881-1.214l2.418-1.753a.751.751 0 0 1 1.19.607v6.791a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalCircleBulk;
