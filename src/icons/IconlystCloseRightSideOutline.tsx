import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseRightSideOutline = ({
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
      d="M5.085 4.92C4.409 5.646 4 6.709 4 8.026v7.948c0 1.317.41 2.38 1.087 3.106.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.95-1.17H8.033c-1.289 0-2.277.45-2.947 1.17M3.987 3.898C4.97 2.84 6.373 2.25 8.032 2.25h8.434c1.66 0 3.063.59 4.047 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H8.032c-1.655 0-3.057-.591-4.042-1.647-.979-1.05-1.49-2.501-1.49-4.13V8.027c0-1.627.508-3.077 1.487-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.442 9.599a.75.75 0 0 1 1.061 0l1.342 1.342 1.343-1.342a.75.75 0 1 1 1.06 1.06l-1.342 1.343 1.342 1.342a.75.75 0 0 1-1.06 1.06l-1.343-1.342-1.341 1.342a.75.75 0 0 1-1.061-1.06l1.342-1.342-1.343-1.343a.75.75 0 0 1 0-1.06M8.792 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseRightSideOutline;
