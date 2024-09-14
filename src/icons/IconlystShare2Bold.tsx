import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare2Bold = ({
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
      d="M9.36 6.345A2.81 2.81 0 0 0 12 8.218c1.214 0 2.25-.782 2.639-1.873 2.618 1.082 4.337 3.637 4.337 6.534 0 .436-.039.87-.117 1.293a3 3 0 0 0-.162-.005c-1.545 0-2.803 1.267-2.803 2.824 0 .528.144 1.023.396 1.447a6.9 6.9 0 0 1-4.292 1.494 6.92 6.92 0 0 1-4.293-1.486c.255-.425.401-.923.401-1.455 0-1.557-1.258-2.824-2.803-2.824a3 3 0 0 0-.168.005 7 7 0 0 1-.115-1.293c0-2.903 1.721-5.457 4.34-6.534M9.265 4.78A2.81 2.81 0 0 1 12 2.568c1.336 0 2.456.948 2.735 2.21 3.443 1.19 5.741 4.418 5.741 8.101 0 .605-.063 1.205-.186 1.79a2.83 2.83 0 0 1 1.21 2.322c0 1.558-1.257 2.825-2.803 2.825-.476 0-.924-.12-1.317-.332a8.4 8.4 0 0 1-5.382 1.948A8.42 8.42 0 0 1 6.61 19.49c-.39.208-.835.326-1.307.326-1.546 0-2.803-1.267-2.803-2.825a2.83 2.83 0 0 1 1.204-2.318 9 9 0 0 1-.184-1.794c0-3.689 2.3-6.916 5.744-8.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShare2Bold;
