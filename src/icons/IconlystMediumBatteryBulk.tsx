import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBatteryBulk = ({
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
      d="M6.782 18.078h7.746c2.687 0 4.364-1.503 4.364-4.265v-3.546c0-2.806-1.677-4.343-4.364-4.343H6.791c-2.695 0-4.364 1.511-4.364 4.273v3.616c-.009 2.762 1.66 4.265 4.355 4.265"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.48 9.064a.75.75 0 0 1 .75-.75h.8c.794 0 1.495.233 1.968.82.445.553.575 1.285.575 2.03v1.708c0 .734-.13 1.46-.58 2.006-.474.578-1.174.804-1.964.804h-.792a.75.75 0 0 1 0-1.5h.792c.51 0 .708-.138.805-.256.124-.15.24-.455.24-1.054v-1.709c0-.612-.117-.93-.244-1.087-.1-.123-.295-.262-.8-.262h-.8a.75.75 0 0 1-.75-.75M11.325 13.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.6c0-.41.34-.75.75-.75s.75.34.75.75zm-3.8 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.6c0-.41.34-.75.75-.75s.75.34.75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumBatteryBulk;
