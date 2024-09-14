import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareOutline = ({
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
      d="M5.452 4.92c-.678.727-1.088 1.79-1.088 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.659 1.17 2.947 1.17h8.434c1.29 0 2.279-.45 2.95-1.17.675-.726 1.084-1.789 1.084-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.396c-1.283 0-2.273.45-2.944 1.17M4.354 3.897C5.34 2.841 6.741 2.25 8.396 2.25h8.435c1.66 0 3.062.59 4.046 1.648.979 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.396c-1.659 0-3.061-.59-4.045-1.648-.978-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.615 7.636a.75.75 0 0 1 .75.75v7.228a.75.75 0 0 1-1.5 0V8.386a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.394 9.818a.75.75 0 0 1-.275 1.025l-6.26 3.614a.75.75 0 0 1-.75-1.3l6.26-3.613a.75.75 0 0 1 1.025.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.394 14.182a.75.75 0 0 0-.275-1.025l-6.26-3.614a.75.75 0 0 0-.75 1.3l6.26 3.613a.75.75 0 0 0 1.025-.274"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarSquareOutline;
