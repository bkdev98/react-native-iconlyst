import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeBulk = ({
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
      d="M16.807 2.5H8.86c-3.306 0-5.526 2.122-5.526 5.28v8.44c0 3.158 2.22 5.28 5.526 5.28h7.947c3.306 0 5.527-2.122 5.527-5.28V7.78c0-3.158-2.221-5.28-5.527-5.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.408 10.582a.75.75 0 0 0 .75-.75l.002-1.01a2.13 2.13 0 0 0-.636-1.526 2.1 2.1 0 0 0-1.483-.614h-1.033a.75.75 0 0 0 0 1.5h1.023a.63.63 0 0 1 .629.638l-.002 1.01a.75.75 0 0 0 .75.752M16.032 17.32c.562 0 1.09-.216 1.49-.612.41-.407.637-.95.636-1.527l-.002-1.01a.75.75 0 0 0-.75-.75h-.001a.75.75 0 0 0-.75.752l.003 1.01a.64.64 0 0 1-.19.459.72.72 0 0 1-.456.179h-1.006a.75.75 0 0 0 0 1.5zM9.655 8.182h1.007a.75.75 0 0 0 0-1.5h-.997c-.57-.026-1.112.21-1.521.615a2.12 2.12 0 0 0-.634 1.525l.002 1.01a.749.749 0 1 0 1.5-.001L9.01 8.819c0-.173.067-.335.189-.457.12-.12.279-.208.456-.18M8.144 16.709c.402.395.929.612 1.48.612h1.036a.75.75 0 0 0 0-1.5H9.643a.63.63 0 0 1-.635-.638l.002-1.01a.75.75 0 0 0-1.5-.002l-.002 1.01a2.13 2.13 0 0 0 .636 1.528"
    />
  </Svg>
);
export default IconlystScreenSizeBulk;
