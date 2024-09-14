import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareBold = ({
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
      d="m12.75 10.536.72-.576-.72-.576zM12.75 14.803l.719-.573-.718-.574z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.139 13.645a.752.752 0 0 1 0 1.172l-2.67 2.13a.75.75 0 0 1-.793.09.75.75 0 0 1-.425-.676v-2.705l-1.453 1.161a.75.75 0 0 1-.936-1.172l1.937-1.55-1.937-1.549a.75.75 0 0 1 .936-1.172l1.453 1.162V7.821a.749.749 0 0 1 1.219-.585l2.67 2.139a.75.75 0 0 1-.001 1.171l-1.937 1.549zM15.318 2.5H8.683C5.523 2.5 3.4 4.723 3.4 8.031v7.939c0 3.308 2.123 5.53 5.283 5.53h6.634c3.16 0 5.283-2.222 5.283-5.53V8.031c0-3.308-2.123-5.531-5.282-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothSquareBold;
