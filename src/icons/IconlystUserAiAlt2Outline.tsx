import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAiAlt2Outline = ({
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
      d="M10.334 4.21a3.95 3.95 0 1 0 0 7.902 3.95 3.95 0 0 0 0-7.901M4.883 8.163a5.45 5.45 0 1 1 10.901 0 5.45 5.45 0 0 1-10.901 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.103 17.543a5.15 5.15 0 0 1 5.149-5.148h4.283q.573 0 1.113.12a.75.75 0 0 1-.323 1.465 3.7 3.7 0 0 0-.79-.085H8.252a3.65 3.65 0 0 0-3.649 3.648q0 .262-.005.497c-.007.487-.014.9.06 1.32a.75.75 0 0 1-1.479.256c-.1-.572-.089-1.177-.08-1.69q.003-.202.004-.383M17.561 13.348a.75.75 0 0 1 .704.49l.1.274a3.01 3.01 0 0 0 1.78 1.781l.272.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.778 1.783l-.101.273a.75.75 0 0 1-1.407 0l-.102-.273a3.01 3.01 0 0 0-1.778-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.778-1.783l.102-.273a.75.75 0 0 1 .703-.49m0 2.4a4.5 4.5 0 0 1-.949.95c.362.267.682.587.95.949.266-.362.586-.682.948-.95a4.5 4.5 0 0 1-.949-.949M12.25 17.432a.75.75 0 0 1 .718.532c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 .717-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserAiAlt2Outline;
