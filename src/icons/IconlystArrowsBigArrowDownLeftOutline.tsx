import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownLeftOutline = ({
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
      d="M13.207 8.13a.19.19 0 0 0-.27 0L8.97 12.096a.75.75 0 0 1-1.06 0L5.762 9.948l-.506 8.594a.192.192 0 0 0 .203.202l8.593-.506-2.148-2.147a.75.75 0 0 1 0-1.06l3.966-3.967a.19.19 0 0 0 0-.27zm-1.332-1.06c.661-.661 1.732-.661 2.393 0l2.663 2.663c.66.66.66 1.731 0 2.392l-3.436 3.435 2.057 2.058c.745.744.26 2.02-.791 2.081l-9.214.542a1.692 1.692 0 0 1-1.788-1.787L4.3 9.24c.062-1.052 1.337-1.537 2.082-.792l2.057 2.057zM14.995 3.976a.75.75 0 0 1 1.06 0l3.97 3.969a.75.75 0 1 1-1.061 1.06l-3.97-3.969a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownLeftOutline;
