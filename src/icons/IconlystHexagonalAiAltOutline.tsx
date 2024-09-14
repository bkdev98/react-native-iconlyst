import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalAiAltOutline = ({
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
      d="M5.96 4.55a3.19 3.19 0 0 1 2.758-1.593h6.564c1.138 0 2.19.607 2.76 1.592l3.281 5.686c.57.986.57 2.2 0 3.185l-3.282 5.686a3.19 3.19 0 0 1-2.759 1.592H8.718a3.19 3.19 0 0 1-2.758-1.592L2.677 13.42a3.18 3.18 0 0 1 0-3.184zm1.299.75-3.283 5.686c-.301.52-.301 1.163 0 1.684l3.283 5.686c.3.521.857.842 1.459.842h6.564c.603 0 1.16-.321 1.46-.842l3.282-5.686c.301-.521.301-1.163 0-1.684l-3.282-5.687c-.3-.52-.857-.842-1.46-.842H8.718c-.602 0-1.158.321-1.46.842"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.054 14.729a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.102a.75.75 0 0 1 0-1.406l.273-.101A3.01 3.01 0 0 0 9.25 8.793l.1-.273a.75.75 0 0 1 1.408 0l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.274.101a3.01 3.01 0 0 0-1.778 1.782l-.101.274a.75.75 0 0 1-.704.49m.949-3.35a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95c.361.267.681.588.948.95.267-.362.587-.683.949-.95M15.365 15.97a.75.75 0 0 1-.718-.531 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalAiAltOutline;
