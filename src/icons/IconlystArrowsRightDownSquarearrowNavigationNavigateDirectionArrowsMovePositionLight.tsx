import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsRightDownSquarearrowNavigationNavigateDirectionArrowsMovePositionLight =
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
        d="M17 8.956h-5.81c-1.234 0-2.235 1-2.235 2.234V17M17 8.956 15.044 7m1.955 1.956-1.955 1.954M8.955 17l1.955-1.955M8.955 17 7 15.045"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.784v8.434C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.157 3 16.218"
      />
    </Svg>
  );
export default IconlystArrowsRightDownSquarearrowNavigationNavigateDirectionArrowsMovePositionLight;
