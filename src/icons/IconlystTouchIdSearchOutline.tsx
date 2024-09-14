import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSearchOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.147 4.717a5.895 5.895 0 0 0-5.895 5.894v4.685q0 .381.048.753a.75.75 0 1 1-1.488.188 8 8 0 0 1-.06-.941V10.61a7.395 7.395 0 0 1 14.789 0 .75.75 0 0 1-1.5 0 5.894 5.894 0 0 0-5.894-5.894"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.959 11.1a4.19 4.19 0 0 1 4.187-4.188.75.75 0 0 1 0 1.5A2.69 2.69 0 0 0 8.459 11.1v.937a.75.75 0 0 1-1.5 0zM7.709 14.084a.75.75 0 0 1 .75.75c0 .863.406 1.63 1.04 2.122a.75.75 0 1 1-.921 1.184 4.18 4.18 0 0 1-1.619-3.306.75.75 0 0 1 .75-.75M11.147 10.256a.75.75 0 0 1 .75.75v1.909a.75.75 0 0 1-1.5 0v-1.91a.75.75 0 0 1 .75-.75M13.16 8.22a.75.75 0 0 1 1.06.042 4.17 4.17 0 0 1 1.11 2.84.75.75 0 0 1-1.5 0 2.67 2.67 0 0 0-.71-1.821.75.75 0 0 1 .04-1.06M5.112 18.206a.75.75 0 0 1 1.034.238 5.89 5.89 0 0 0 5.002 2.774.75.75 0 0 1 0 1.5 7.39 7.39 0 0 1-6.274-3.478.75.75 0 0 1 .238-1.034M16.288 14.99a2.384 2.384 0 1 0 0 4.768 2.384 2.384 0 0 0 0-4.768m-3.884 2.384a3.884 3.884 0 1 1 7.043 2.261l1.081 1.08a.75.75 0 0 1-1.06 1.061l-1.113-1.112a3.885 3.885 0 0 1-5.95-3.29"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSearchOutline;
