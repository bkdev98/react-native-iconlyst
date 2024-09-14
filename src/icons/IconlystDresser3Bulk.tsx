import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser3Bulk = ({
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
      d="M12.786 19.11h-1.569a.75.75 0 0 1 0-1.5h1.569a.75.75 0 0 1 0 1.5m-7.834-2.301a.3.3 0 0 0-.3.3v1c0 2.028 1.305 3.39 3.247 3.39h8.2c1.913 0 3.249-1.393 3.249-3.39v-1a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.946 15.309a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3H7.9c-1.912 0-3.247 1.393-3.247 3.389v9.12a.3.3 0 0 0 .3.3zM12.746 15.009a.3.3 0 0 0 .3.3h6.002a.3.3 0 0 0 .3-.3v-9.12c0-1.996-1.336-3.389-3.248-3.389h-3.055a.3.3 0 0 0-.3.3z" />
    </G>
    <Path
      fill={props.color}
      d="M9.697 8.068a.75.75 0 0 0-.75.75v1.57a.75.75 0 0 0 1.5 0v-1.57a.75.75 0 0 0-.75-.75M15.055 8.818a.75.75 0 0 0-1.5 0v1.57a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystDresser3Bulk;
