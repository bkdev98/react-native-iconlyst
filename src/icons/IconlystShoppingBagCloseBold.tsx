import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCloseBold = ({
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
      d="M11.786 13.15a4.334 4.334 0 0 1-4.329-4.33.75.75 0 0 1 1.5 0c0 1.56 1.269 2.83 2.829 2.83s2.83-1.27 2.83-2.83a.75.75 0 0 1 1.5 0 4.334 4.334 0 0 1-4.33 4.33m8.956-.09a.53.53 0 0 0 .545-.518V8.026c0-3.305-2.123-5.526-5.283-5.526H7.569c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h4.839a.53.53 0 0 0 .518-.549c-.08-4.251 3.54-7.944 7.816-7.891"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.367 18.81 1.127-1.126a.75.75 0 0 0-1.06-1.06l-1.128 1.126-1.127-1.127a.75.75 0 0 0-1.06 1.06l1.127 1.128-1.127 1.127a.749.749 0 1 0 1.061 1.06l1.126-1.126 1.127 1.126a.749.749 0 1 0 1.06-1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagCloseBold;
