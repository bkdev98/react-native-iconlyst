import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLikeBold = ({
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
      d="M13.61 8.56a1.3 1.3 0 0 0-1.163.198.75.75 0 0 1-.897 0 1.3 1.3 0 0 0-1.164-.197c-.805.26-.998 1.16-.769 1.877.341 1.058 1.617 2.054 2.382 2.544.77-.494 2.052-1.495 2.381-2.54.23-.72.038-1.62-.77-1.882"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.81 10.896c-.646 2.061-3.335 3.555-3.45 3.618a.75.75 0 0 1-.718.001c-.114-.062-2.782-1.536-3.452-3.619l-.001-.001c-.52-1.628.244-3.281 1.74-3.762a2.79 2.79 0 0 1 2.073.15 2.82 2.82 0 0 1 2.061-.152c1.503.484 2.268 2.137 1.746 3.765M12 2.5c-4.425 0-8.026 3.601-8.026 8.027 0 5.636 6.592 10.973 8.025 10.973 1.435 0 8.027-5.337 8.027-10.973 0-4.426-3.6-8.027-8.026-8.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinLikeBold;
