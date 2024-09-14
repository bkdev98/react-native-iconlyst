import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteTerminalOutline = ({
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
      d="M3.99 3.897C4.977 2.84 6.379 2.25 8.034 2.25h8.435c1.659 0 3.061.59 4.045 1.647.978 1.051 1.486 2.501 1.486 4.13v7.946c0 1.628-.508 3.078-1.486 4.129-.984 1.057-2.387 1.648-4.047 1.648H8.034c-1.66 0-3.062-.591-4.046-1.648C3.01 19.052 2.5 17.6 2.5 15.973V8.026c0-1.629.511-3.079 1.49-4.13M5.089 4.92C4.41 5.646 4 6.709 4 8.026v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.026c0-1.318-.41-2.38-1.085-3.107-.67-.72-1.659-1.169-2.947-1.169H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.242 17.207a.75.75 0 0 1 .75-.75h2.736a.75.75 0 0 1 0 1.5h-2.736a.75.75 0 0 1-.75-.75M8.243 12.274a.75.75 0 0 1 1.06 0l1.965 1.965a.75.75 0 0 1 0 1.06l-1.964 1.965a.75.75 0 1 1-1.06-1.06l1.433-1.435-1.434-1.434a.75.75 0 0 1 0-1.06M2.5 9.492a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M5.79 6.55a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteTerminalOutline;
