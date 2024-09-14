import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerLeftDownOutline = ({
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
      d="M8.973 10.61a.75.75 0 0 1 0 1.06l-2.912 2.913 2.912 2.913a.75.75 0 1 1-1.06 1.06L4.47 15.113a.75.75 0 0 1 0-1.06l3.443-3.443a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19 5.227a.75.75 0 0 1 .75.75v2.98a6.376 6.376 0 0 1-6.377 6.376H5.197a.75.75 0 0 1 0-1.5h8.176a4.876 4.876 0 0 0 4.877-4.875V5.977a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerLeftDownOutline;
