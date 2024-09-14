import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftDownSquarearrowNavigationNavigateDirectionArrowsMovePositionLight =
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
        d="M7 8.956h5.81c1.234 0 2.235 1 2.235 2.234V17M7 8.956 8.956 7M7 8.956l1.956 1.954M15.045 17l-1.956-1.955M15.045 17 17 15.045"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 16.218V7.783C21 4.835 18.919 3 15.974 3H8.026C5.081 3 3 4.835 3 7.784v8.434C3 19.166 5.081 21 8.026 21h7.948C18.919 21 21 19.157 21 16.218"
      />
    </Svg>
  );
export default IconlystArrowsLeftDownSquarearrowNavigationNavigateDirectionArrowsMovePositionLight;
