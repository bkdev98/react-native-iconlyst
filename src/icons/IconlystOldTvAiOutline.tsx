import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAiOutline = ({
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
      d="M2.25 11.309a4.78 4.78 0 0 1 4.78-4.78h9.942a4.78 4.78 0 0 1 4.778 4.78v5.456c0 2.64-2.14 4.78-4.778 4.78H7.029a4.78 4.78 0 0 1-4.779-4.78zm4.78-3.28a3.28 3.28 0 0 0-3.28 3.28v5.456a3.28 3.28 0 0 0 3.28 3.28h9.942a3.28 3.28 0 0 0 3.278-3.28V11.31a3.28 3.28 0 0 0-3.278-3.28z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.11 2.705a.75.75 0 0 1-.059 1.059l-4.552 4.075a.75.75 0 0 1-1.008-.007L7.053 3.758a.75.75 0 1 1 1.015-1.105l3.937 3.615 4.046-3.622a.75.75 0 0 1 1.059.059M10.054 10.067a.75.75 0 0 1 .704.49l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.274.102a3.01 3.01 0 0 0-1.778 1.781l-.101.274a.75.75 0 0 1-1.407 0l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.102a.75.75 0 0 1 0-1.406l.273-.101A3.01 3.01 0 0 0 9.25 10.83l.1-.273a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.587.95.949.266-.362.586-.682.948-.95a4.5 4.5 0 0 1-.949-.95M15.365 14.15a.75.75 0 0 1 .717.533c.1.325.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAiOutline;
