import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTabletAiOutline = ({
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
      d="M10.242 3a.75.75 0 0 1 .75-.75h6.015a4.37 4.37 0 0 1 4.368 4.367v10.764a4.37 4.37 0 0 1-4.368 4.369H6.993a4.37 4.37 0 0 1-4.368-4.367l-.001-6.764a.75.75 0 0 1 1.5 0l.001 6.763a2.87 2.87 0 0 0 2.868 2.868h10.014a2.87 2.87 0 0 0 2.869-2.868l-.001-10.764a2.87 2.87 0 0 0-2.868-2.868h-6.016a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11 17.28a1 1 0 1 1 2.001 0 1 1 0 0 1-2 0M5.97 8.949a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.78-1.783l.1-.273a.75.75 0 0 1 1.407 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.783l-.1.273a.75.75 0 0 1-.704.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.949.267-.362.587-.682.948-.95M11.28 10.191a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTabletAiOutline;
