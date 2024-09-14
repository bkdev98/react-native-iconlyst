import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser3Bold = ({
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
      d="M8.947 8.819a.75.75 0 0 1 1.5 0v1.57a.75.75 0 0 1-1.5 0zm2 6.49a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3H7.898c-1.912 0-3.247 1.393-3.247 3.389v9.12a.3.3 0 0 0 .3.3zM14.305 8.069a.75.75 0 0 1 .75.75v1.57a.75.75 0 0 1-1.5 0v-1.57a.75.75 0 0 1 .75-.75m-1.56 6.94a.3.3 0 0 0 .3.3h6.002a.3.3 0 0 0 .3-.3v-9.12c0-1.996-1.335-3.389-3.248-3.389h-3.053a.3.3 0 0 0-.3.3zM12.786 19.11h-1.569a.75.75 0 0 1 0-1.5h1.569a.75.75 0 0 1 0 1.5m-7.834-2.3a.3.3 0 0 0-.3.3v1c0 2.027 1.305 3.39 3.247 3.39h8.2c1.913 0 3.249-1.394 3.249-3.39v-1a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDresser3Bold;
