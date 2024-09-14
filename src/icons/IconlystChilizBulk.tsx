import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChilizBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.425 8.741a.9.9 0 0 0 .064-.31v-.019a.74.74 0 0 0-.737-.752H8.248a.1.1 0 0 0-.027.007q-.013.005-.026.006c-.51.04-.858.592-.62 1.068l4.252 8.62a.751.751 0 0 0 1.346 0zM12.5 12.19l-1.164.787 1.164 2.359 1.163-2.36zm-1.834-.572-.494-1.002.99.668zm3.668 0 .494-1-.988.667zm-1.833-1.24L10.698 9.16h3.606z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChilizBulk;
