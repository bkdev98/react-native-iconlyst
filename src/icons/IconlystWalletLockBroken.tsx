import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLockBroken = ({
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
      d="M21.25 9.34h-3.808a2.532 2.532 0 0 0 0 5.063h1.292M17.247 11.815h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.888 20.31h3.426a4.935 4.935 0 0 0 4.936-4.935v-6.75a4.935 4.935 0 0 0-4.936-4.936h-.654M3.25 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h4.064M8.139 15.571v-1.133a1.832 1.832 0 0 0-3.663-.008v1.141"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.773 20.308c-.84 0-1.523-.682-1.523-1.523v-1.722c0-.842.682-1.523 1.523-1.523H7.84c.841 0 1.523.681 1.523 1.523v1.722c0 .84-.682 1.523-1.523 1.523"
    />
  </Svg>
);
export default IconlystWalletLockBroken;
