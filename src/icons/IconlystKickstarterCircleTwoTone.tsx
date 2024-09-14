import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.834 8.5v7c0 .828.7 1.5 1.563 1.5.862 0 1.562-.672 1.562-1.5v-2.382l2.366 3.242c.495.679 1.469.844 2.176.369.707-.476.879-1.41.384-2.09L13.959 12l1.926-2.64a1.46 1.46 0 0 0-.384-2.089c-.707-.475-1.681-.31-2.176.369l-2.366 3.242V8.5c0-.828-.7-1.5-1.562-1.5s-1.563.672-1.563 1.5"
    />
  </Svg>
);
export default IconlystKickstarterCircleTwoTone;
