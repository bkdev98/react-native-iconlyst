import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.282 5.531h8.434c3.161 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.104 12.001c0 .474.046 2.841.947 2.841.902 0 .948-2.367.948-2.84 0-.475-.046-2.842-.948-2.842s-.947 2.367-.947 2.841M12.314 12.001c0 1.62.679 2.841 1.579 2.841s1.579-1.22 1.579-2.84-.679-2.842-1.579-2.842-1.579 1.221-1.579 2.841M6.002 12.001a2.844 2.844 0 0 0 2.841 2.841 2.844 2.844 0 0 0 2.841-2.84A2.844 2.844 0 0 0 8.843 9.16a2.844 2.844 0 0 0-2.841 2.841"
    />
  </Svg>
);
export default IconlystMediumBulk;
