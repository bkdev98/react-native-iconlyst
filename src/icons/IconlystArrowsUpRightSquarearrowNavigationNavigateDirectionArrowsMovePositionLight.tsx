import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsUpRightSquarearrowNavigationNavigateDirectionArrowsMovePositionLight =
  ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15.044h-5.81c-1.234 0-2.235-1-2.235-2.234V7M17 15.044 15.044 17m1.955-1.956-1.955-1.954M8.955 7l1.955 1.955M8.955 7 7 8.955"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7.782v8.435C3 19.165 5.081 21 8.026 21h7.948C18.919 21 21 19.165 21 16.216V7.782C21 4.834 18.919 3 15.974 3H8.026C5.081 3 3 4.843 3 7.782"
      />
    </Svg>
  );
export default IconlystArrowsUpRightSquarearrowNavigationNavigateDirectionArrowsMovePositionLight;
