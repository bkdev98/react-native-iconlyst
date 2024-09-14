import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDecredBold = ({
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
      d="m14.405 13.9 1.107 1.182a.75.75 0 1 1-1.093 1.026l-2.281-2.43a.75.75 0 0 1 .547-1.263h1.426c.897 0 1.625-.731 1.625-1.63 0-.894-.728-1.62-1.625-1.62h-1.426a.75.75 0 0 1 0-1.5h1.426c1.723 0 3.125 1.4 3.125 3.12a3.13 3.13 0 0 1-2.831 3.116m-3.091 2.445H9.888a3.127 3.127 0 0 1-3.125-3.12 3.13 3.13 0 0 1 2.831-3.116L8.486 8.928A.751.751 0 0 1 9.58 7.9l2.281 2.43a.75.75 0 0 1-.547 1.264H9.888a1.625 1.625 0 1 0 0 3.25h1.426a.75.75 0 0 1 0 1.5M12 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDecredBold;
