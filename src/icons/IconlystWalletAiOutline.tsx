import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAiOutline = ({
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
      d="M17.191 10.095a1.78 1.78 0 0 0 0 3.562H21a.75.75 0 0 1 0 1.5H17.19a3.28 3.28 0 0 1 0-6.562H21a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.244 11.82a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.936 4.44A4.186 4.186 0 0 0 3.75 8.624v3.087a.75.75 0 0 1-1.5 0V8.625A5.686 5.686 0 0 1 7.936 2.94h8.128a5.686 5.686 0 0 1 5.686 5.686v6.75a5.686 5.686 0 0 1-5.686 5.686h-4.168a.75.75 0 0 1 0-1.5h4.168a4.186 4.186 0 0 0 4.186-4.186v-6.75a4.186 4.186 0 0 0-4.186-4.186z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.596 14.362a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1A3.01 3.01 0 0 0 6.4 20.298l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m0 4.299c.267-.362.587-.682.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.949.95c.362.268.682.588.949.95M10.823 12.005a.75.75 0 0 1 .718.532c.099.326.353.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletAiOutline;
