import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSockBold = ({
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
      d="M17.273 9.961H9.456c-.322 0-.623-.053-.911-.128v2.327l-1.651.882a4.82 4.82 0 0 0-2.507 3.503 4.83 4.83 0 0 0 1.26 4.12 4.864 4.864 0 0 0 6.127.775l5.116-3.223a3.41 3.41 0 0 0 1.6-2.9V9.75a3.5 3.5 0 0 1-1.217.212M17.273 3.043H9.457c-1.394 0-2.406.905-2.406 2.152v1.357c0 1.248 1.011 2.153 2.405 2.153h7.817c1.393 0 2.404-.905 2.404-2.153l.001-1.357c0-1.247-1.01-2.152-2.405-2.152"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M14.727 19.58a.4.4 0 0 0-.06-.13c-.46-.7-.71-1.52-.71-2.37 0-2.38 1.94-4.31 4.32-4.31.07 0 .14-.01.21-.04v-1.42a.5.5 0 0 0-.21-.04c-3.21 0-5.82 2.61-5.82 5.81 0 1.14.33 2.25.96 3.2.02.03.04.06.07.08z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSockBold;
