import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage3AiOutline = ({
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
      d="M2.25 9.508C2.25 6.34 4.827 3.775 8 3.775h8c3.173 0 5.75 2.565 5.75 5.733v4.984c0 3.168-2.577 5.733-5.75 5.733H4c-.964 0-1.75-.78-1.75-1.747zM8 5.275a4.24 4.24 0 0 0-4.25 4.233v8.97c0 .134.11.247.25.247h12c2.35 0 4.25-1.898 4.25-4.233V9.508c0-2.335-1.9-4.233-4.25-4.233z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.946 8.03a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.78 1.782l.272.1a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.1.273a.75.75 0 0 1-1.408 0l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.273-.1a.75.75 0 0 1 0-1.407l.274-.101a3.01 3.01 0 0 0 1.778-1.782l.101-.274a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.949c.362.267.682.587.949.95.267-.363.587-.683.949-.95a4.5 4.5 0 0 1-.95-.95M8.635 12.114a.75.75 0 0 1 .718.532c.099.325.353.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareMessage3AiOutline;
