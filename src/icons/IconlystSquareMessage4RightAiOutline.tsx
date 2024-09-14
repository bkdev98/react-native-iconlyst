import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage4RightAiOutline = ({
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
      d="M6 4.097a2.25 2.25 0 0 0-2.25 2.25v8A2.25 2.25 0 0 0 6 16.597h5.62c.428 0 .842.157 1.162.442l2.968 2.638v-1.83c0-.69.56-1.25 1.25-1.25h1a2.25 2.25 0 0 0 2.25-2.25v-8A2.25 2.25 0 0 0 18 4.097zm-3.75 2.25A3.75 3.75 0 0 1 6 2.597h12a3.75 3.75 0 0 1 3.75 3.75v8a3.75 3.75 0 0 1-3.75 3.75h-.75v2.137c0 1.078-1.274 1.65-2.08.934l-3.384-3.008a.25.25 0 0 0-.166-.063H6a3.75 3.75 0 0 1-3.75-3.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.568 6.368a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.78 1.782l.272.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.782l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.101a.75.75 0 0 1 0-1.407l.272-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.949.267-.362.587-.682.949-.95a4.5 4.5 0 0 1-.95-.95M15.47 10.113a.75.75 0 0 1 .718.532c.1.325.354.58.678.679a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareMessage4RightAiOutline;
