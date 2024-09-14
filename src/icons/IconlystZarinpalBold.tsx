import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalBold = ({
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
      d="M16.609 16.689c0 .23-.194.43-.433.43h-1.994a.433.433 0 0 1-.306-.74l1.994-1.99a.43.43 0 0 1 .739.3zm-8.747-.04a1.33 1.33 0 0 1 0-1.88l6.454-6.45c.519-.52 1.36-.52 1.88 0 .518.52.518 1.36 0 1.88l-6.454 6.45c-.519.52-1.36.52-1.88 0m-.469-6.32v-2c0-.24.193-.43.432-.43h1.994c.386 0 .579.47.306.74l-1.993 1.99a.43.43 0 0 1-.739-.3m8.824-7.32H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZarinpalBold;
