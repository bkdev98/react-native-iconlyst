import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage4AiOutline = ({
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
      d="M2.25 6.347A3.75 3.75 0 0 1 6 2.597h12a3.75 3.75 0 0 1 3.75 3.75v8a3.75 3.75 0 0 1-3.75 3.75h-5.62a.25.25 0 0 0-.166.063L8.83 21.168c-.806.717-2.08.144-2.08-.934v-2.137H6a3.75 3.75 0 0 1-3.75-3.75zM6 4.097a2.25 2.25 0 0 0-2.25 2.25v8A2.25 2.25 0 0 0 6 16.597h1c.69 0 1.25.56 1.25 1.25v1.83l2.968-2.638a1.75 1.75 0 0 1 1.162-.442H18a2.25 2.25 0 0 0 2.25-2.25v-8A2.25 2.25 0 0 0 18 4.097z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.946 6.259a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.78 1.782l.272.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.782l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.274-.101a3.01 3.01 0 0 0 1.778-1.782l.101-.273a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.949.267-.362.587-.682.949-.95a4.5 4.5 0 0 1-.95-.95M8.635 10.343a.75.75 0 0 1 .718.532c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareMessage4AiOutline;
