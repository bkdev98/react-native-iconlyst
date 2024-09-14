import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalAiOutline = ({
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
      d="M10.24 2.472a3.52 3.52 0 0 1 3.522 0l5.61 3.239a3.52 3.52 0 0 1 1.761 3.05v6.478c0 1.258-.67 2.421-1.76 3.05l-5.61 3.24c-1.09.628-2.433.628-3.523 0l-5.61-3.24a3.52 3.52 0 0 1-1.76-3.05V8.761c0-1.258.67-2.421 1.76-3.05zm2.772 1.299a2.02 2.02 0 0 0-2.022 0L5.38 7.01a2.02 2.02 0 0 0-1.01 1.75v6.48c0 .721.385 1.389 1.01 1.75l5.61 3.24a2.02 2.02 0 0 0 2.022 0l5.61-3.24a2.02 2.02 0 0 0 1.011-1.75V8.76c0-.721-.385-1.389-1.01-1.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.054 9.271a.75.75 0 0 1 .704.49l.1.274a3.01 3.01 0 0 0 1.78 1.781l.273.102a.75.75 0 0 1 0 1.406l-.274.101a3.01 3.01 0 0 0-1.778 1.782l-.101.273a.75.75 0 0 1-1.407 0l-.101-.273a3.01 3.01 0 0 0-1.78-1.782l-.272-.1a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.273a.75.75 0 0 1 .704-.49m0 4.3c.267-.362.587-.683.949-.95a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.949.95c.362.267.682.588.95.95M15.365 8.03a.75.75 0 0 1 .717.531c.1.326.354.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalAiOutline;
