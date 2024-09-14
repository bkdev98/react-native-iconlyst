import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage2AiOutline = ({
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
      d="M2.25 6.766A3.745 3.745 0 0 1 6 3.026h12a3.745 3.745 0 0 1 3.75 3.74v7.978a3.745 3.745 0 0 1-3.75 3.74H8.408c-.152 0-.3.046-.426.131l-2.991 2.05c-1.158.794-2.741-.029-2.741-1.44zM6 4.526a2.245 2.245 0 0 0-2.25 2.24v12.46a.25.25 0 0 0 .393.202l2.991-2.05c.375-.257.82-.394 1.274-.394H18a2.245 2.245 0 0 0 2.25-2.24V6.766A2.245 2.245 0 0 0 18 4.526z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.054 6.615a.75.75 0 0 1 .704.49l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.101a.75.75 0 0 1 0 1.407l-.274.1a3.01 3.01 0 0 0-1.778 1.782l-.101.274a.75.75 0 0 1-1.407 0l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.101a.75.75 0 0 1 0-1.407l.273-.101A3.01 3.01 0 0 0 9.25 7.378l.1-.273a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.587.95.949.266-.362.586-.682.948-.95a4.5 4.5 0 0 1-.949-.95M15.365 10.699a.75.75 0 0 1 .717.532c.1.326.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareMessage2AiOutline;
