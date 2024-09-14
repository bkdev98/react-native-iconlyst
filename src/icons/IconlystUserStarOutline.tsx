import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserStarOutline = ({
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
      d="m16.457 16.041-.228.458v.002a.99.99 0 0 1-.74.536h-.001l-.499.073.364.35c.229.225.336.55.28.87v.003l-.087.492.455-.238a.98.98 0 0 1 .923 0l.447.234-.085-.483a.98.98 0 0 1 .286-.884l.355-.343-.497-.072a.98.98 0 0 1-.745-.54zm2.526 1.223-.01-.002zm-.294-.89.008-.007zm-2.544-2.421a1 1 0 0 1 .749.051l.009.005a1 1 0 0 1 .435.434l.003.007.569 1.143 1.268.184a.99.99 0 0 1 .648.375l.002.002a.98.98 0 0 1-.103 1.305l-.915.885.22 1.253.004.022a.985.985 0 0 1-.813 1.113l-.012.002c-.197.03-.408.001-.6-.095l-.012-.006-1.135-.594-1.15.6a.99.99 0 0 1-1.317-.401l-.01-.018a1 1 0 0 1-.1-.608l.003-.017.22-1.251-.923-.888-.01-.01a.984.984 0 0 1 .534-1.665l.022-.004 1.274-.185.568-1.142.001-.002a.98.98 0 0 1 .571-.495m2.615 4.107.002.01zM7.409 16.988c-.814.737-1.14 1.675-1.14 2.5a.75.75 0 0 1-1.5 0c0-1.215.48-2.568 1.633-3.612s2.913-1.72 5.37-1.72a.75.75 0 0 1 0 1.5c-2.184 0-3.551.596-4.363 1.332M11.771 4.75a3.244 3.244 0 1 0 0 6.488 3.244 3.244 0 0 0 0-6.488M7.027 7.994a4.744 4.744 0 1 1 9.488 0 4.744 4.744 0 0 1-9.488 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserStarOutline;
