import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterSquareLight = ({
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
      d="M7.833 8.5v7c0 .828.7 1.5 1.563 1.5.862 0 1.562-.672 1.562-1.5v-2.382l2.366 3.242c.495.679 1.469.844 2.176.369.707-.476.879-1.41.384-2.09L13.958 12l1.926-2.64a1.46 1.46 0 0 0-.384-2.089c-.707-.475-1.681-.31-2.176.369l-2.366 3.242V8.5c0-.828-.7-1.5-1.562-1.5s-1.563.672-1.563 1.5"
    />
  </Svg>
);
export default IconlystKickstarterSquareLight;
