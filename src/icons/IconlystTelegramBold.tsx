import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramBold = ({
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
      d="m14.252 9.781-5.508 2.031a.25.25 0 0 0-.166.224.25.25 0 0 0 .127.246l1.943 1.139-.001.002c.128.073.237.18.306.306l1.128 1.932a.24.24 0 0 0 .244.12.25.25 0 0 0 .22-.165l2.036-5.507a.24.24 0 0 0-.058-.27.25.25 0 0 0-.271-.058"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.988 10.629-2.036 5.51a1.74 1.74 0 0 1-1.656 1.144c-.62 0-1.188-.321-1.508-.862l-1.047-1.792-1.796-1.053a1.75 1.75 0 0 1-.862-1.67 1.75 1.75 0 0 1 1.137-1.5l5.511-2.032a1.74 1.74 0 0 1 1.852.403c.49.49.646 1.199.405 1.852M12 3.009c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelegramBold;
