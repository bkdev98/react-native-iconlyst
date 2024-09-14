import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletSecurityBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.724 11.21c0-1.82 1.47-3.29 3.28-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v3.593c0 .216.221.362.422.283 1.082-.422 2.262-.726 2.748-.726.86 0 3.8.92 4.64 1.75.93.96.91 1.82.89 2.83-.01.35-.02.87-.02 1.62a5.34 5.34 0 0 1-.532 2.36c-.102.21.044.47.279.47h5.143c3.023 0 5.277-2.446 5.422-5.35a.29.29 0 0 0-.292-.3h-4c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.844 11.148a.749.749 0 1 1-1.5 0 .749.749 0 1 1 1.5 0m-2.62.06c0 .98.8 1.78 1.78 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.98 0-1.78.8-1.78 1.79M8.753 15.62c-.007.37-.018.904-.018 1.69 0 1.574-1.655 2.38-2.26 2.624-.605-.24-2.254-1.038-2.254-2.623 0-.792-.011-1.328-.02-1.698-.003-.212-.01-.358-.008-.465.498-.24 1.978-.754 2.256-.788.338.035 1.89.574 2.314.779 0 .107-.005.258-.01.48m-2.275-2.76c-.508 0-2.98.82-3.416 1.25-.382.397-.377.66-.36 1.533.008.365.019.89.019 1.668 0 3.032 3.395 4.094 3.539 4.138a.73.73 0 0 0 .434 0c.145-.044 3.54-1.106 3.54-4.138 0-.772.012-1.297.019-1.662.018-.877.022-1.141-.371-1.55-.423-.42-2.896-1.238-3.404-1.238"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletSecurityBulk;
