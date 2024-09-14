import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanAiOutline = ({
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
      d="M15.1 3.002a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.642V8.47a.75.75 0 0 1-1.5 0V6.894a3.14 3.14 0 0 0-3.143-3.142H15.85a.75.75 0 0 1-.75-.75M6.893 3.752A3.14 3.14 0 0 0 3.75 6.894V8.47a.75.75 0 1 1-1.5 0V6.894a4.64 4.64 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM3 14.78a.75.75 0 0 1 .75.75v1.576a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893a4.64 4.64 0 0 1-4.643-4.642V15.53a.75.75 0 0 1 .75-.75M21 14.78a.75.75 0 0 1 .75.75v1.576a4.64 4.64 0 0 1-4.643 4.642h-1.289a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142V15.53a.75.75 0 0 1 .75-.75M10.054 14.729a.75.75 0 0 1-.703-.49l-.101-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.102a.75.75 0 0 1 0-1.406l.273-.101A3.01 3.01 0 0 0 9.25 8.793l.1-.273a.75.75 0 0 1 1.408 0l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.274.101a3.01 3.01 0 0 0-1.778 1.782l-.101.274a.75.75 0 0 1-.704.49m.949-3.35a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95c.361.267.681.588.948.95.267-.362.587-.683.949-.95M15.365 15.97a.75.75 0 0 1-.718-.531 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.1.326.354.58.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanAiOutline;