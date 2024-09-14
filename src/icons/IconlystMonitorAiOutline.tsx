import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAiOutline = ({
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
      d="M2.25 7.313c0-2.64 2.14-4.78 4.778-4.78h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456a4.78 4.78 0 0 1-4.78 4.78H7.029a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.28a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.28h9.943a3.28 3.28 0 0 0 3.279-3.28V7.313a3.28 3.28 0 0 0-3.28-3.28zM6.305 20.716a.75.75 0 0 1 .75-.75h9.888a.75.75 0 0 1 0 1.5H7.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.004 16.06a.75.75 0 0 1 .62.86l-.638 3.917a.75.75 0 1 1-1.48-.24l.637-3.918a.75.75 0 0 1 .86-.62M13.995 16.06a.75.75 0 0 1 .86.62l.638 3.916a.75.75 0 0 1-1.48.241l-.638-3.917a.75.75 0 0 1 .62-.86M13.946 6.07a.75.75 0 0 1 .704.49l.1.274a3.01 3.01 0 0 0 1.78 1.782l.272.1a.75.75 0 0 1 0 1.407l-.273.102a3.01 3.01 0 0 0-1.778 1.781l-.101.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.272-.102a.75.75 0 0 1 0-1.406l.273-.101a3.01 3.01 0 0 0 1.778-1.782l.101-.273a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.588.949.95.267-.362.587-.683.949-.95a4.5 4.5 0 0 1-.95-.95M8.54 9.916a.75.75 0 0 1 .717.532c.1.325.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorAiOutline;
