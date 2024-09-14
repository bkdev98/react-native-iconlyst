import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 14.402h-3.808a2.532 2.532 0 0 1 0-5.062h3.807M16.997 11.815h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.73V8.622a4.935 4.935 0 0 1 4.936-4.934h8.128A4.935 4.935 0 0 1 21 8.622v6.75a4.935 4.935 0 0 1-4.936 4.936h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.889 15.571v-1.133a1.832 1.832 0 0 0-3.663-.008v1.141"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.591 20.307H4.523c-.84 0-1.523-.682-1.523-1.523v-1.722c0-.842.682-1.523 1.523-1.523H7.59c.841 0 1.523.681 1.523 1.523v1.722c0 .84-.682 1.523-1.523 1.523"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletLockLight;
