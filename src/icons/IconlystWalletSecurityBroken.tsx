import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletSecurityBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.74 14.407h-1.298a2.532 2.532 0 0 1 0-5.062h3.807M17.247 11.815h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.947 20.31h4.367a4.935 4.935 0 0 0 4.936-4.935v-6.75a4.935 4.935 0 0 0-4.936-4.936h-.7M3.25 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h4.064"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.282 20.309s3.008-.911 3.008-3.421c0-2.512.109-2.43-.132-2.674-.242-.244-2.481-1.023-2.876-1.023-.394 0-2.633.78-2.876 1.023-.241.241-.131.162-.131 2.674 0 2.51 3.007 3.42 3.007 3.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletSecurityBroken;
