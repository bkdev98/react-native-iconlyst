import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCraftAppSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.672 7a5 5 0 0 0 0 10M11.672 12h-5M11.672 12a5.05 5.05 0 0 0 3.535-1.464 5 5 0 0 0 1.186-1.9C16.695 7.765 15.926 7 15.005 7h-3.333zM11.672 12c1.313 0 2.607.536 3.535 1.464.535.535.94 1.19 1.186 1.9.302.87-.467 1.636-1.388 1.636h-3.333z"
    />
  </Svg>
);
export default IconlystCraftAppSquareLight;
