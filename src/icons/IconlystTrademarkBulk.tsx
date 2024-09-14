import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrademarkBulk = ({
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
      d="M3 8.344a1 1 0 0 1 1-1h6.4a1 1 0 1 1 0 2H8.2v6.314a1 1 0 1 1-2 0V9.344H4a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.217 7.42a1 1 0 0 1 1.09.217L16.8 10.13l2.493-2.493A1 1 0 0 1 21 8.344v7.314a1 1 0 1 1-2 0v-4.9l-1.493 1.493a1 1 0 0 1-1.414 0L14.6 10.758v4.9a1 1 0 1 1-2 0V8.344a1 1 0 0 1 .617-.924"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrademarkBulk;
