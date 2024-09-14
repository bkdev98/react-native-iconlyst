import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAddBold = ({
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
      d="M9.434 6.429a.3.3 0 0 0 .3.3h4.532a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3H9.734a.3.3 0 0 0-.3.3zM7.634 6.729a.3.3 0 0 0 .3-.3V2.808a.29.29 0 0 0-.303-.293c-2.355.139-4.042 1.615-4.53 3.869a.288.288 0 0 0 .287.345zM16.066 6.429a.3.3 0 0 0 .3.3h4.247a.288.288 0 0 0 .287-.345c-.488-2.255-2.175-3.732-4.53-3.869a.29.29 0 0 0-.304.293zM14.478 15.06H12.75v1.73a.75.75 0 1 1-1.5 0v-1.73H9.52a.75.75 0 0 1 0-1.5h1.73v-1.73a.749.749 0 1 1 1.5 0v1.73h1.73a.75.75 0 0 1 0 1.5M3.251 8.23a.3.3 0 0 0-.3.3v7.7c0 3.151 2.027 5.27 5.044 5.27h8.012c3.017 0 5.043-2.119 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieAddBold;
