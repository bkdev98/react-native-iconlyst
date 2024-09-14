import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerLeftUpOutline = ({
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
      d="M8.973 5.446a.75.75 0 0 1 0 1.06L6.061 9.42l2.912 2.912a.75.75 0 0 1-1.06 1.061L4.47 9.95a.75.75 0 0 1 0-1.06l3.443-3.444a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.447 9.422a.75.75 0 0 1 .75-.75h8.176a6.376 6.376 0 0 1 6.377 6.375v2.981a.75.75 0 1 1-1.5 0v-2.981a4.876 4.876 0 0 0-4.877-4.875H5.197a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerLeftUpOutline;
