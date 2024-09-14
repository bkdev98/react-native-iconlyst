import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleMessage1AiOutline = ({
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
      d="M4.778 10.23c-.036.491-.043.94.01 1.391.376 3.215 2.811 5.705 6.247 5.875.4.02.713.349.713.749v1.886c3.796-1.134 7.044-4.547 7.467-8.503.049-.456.042-.909.006-1.397-.385-3.622-3.469-6.45-7.221-6.45s-6.836 2.828-7.222 6.45m-1.493-.145C3.745 5.696 7.475 2.28 12 2.28c4.526 0 8.254 3.416 8.715 7.805l.002.023c.04.546.052 1.1-.01 1.68-.512 4.786-4.474 8.735-8.93 9.892-.804.21-1.529-.418-1.529-1.193V18.93c-3.83-.501-6.52-3.456-6.95-7.135a8.8 8.8 0 0 1-.013-1.71"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.054 13.427a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.101a.75.75 0 0 1 0-1.407l.273-.101A3.01 3.01 0 0 0 9.25 7.49l.1-.273a.75.75 0 0 1 1.408 0l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.101a.75.75 0 0 1 0 1.407l-.274.1a3.01 3.01 0 0 0-1.778 1.782l-.101.274a.75.75 0 0 1-.704.49m.949-3.35a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95c.361.268.681.588.948.95.267-.362.587-.682.949-.95M15.365 14.669a.75.75 0 0 1-.718-.532 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.327.354.581.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleMessage1AiOutline;
