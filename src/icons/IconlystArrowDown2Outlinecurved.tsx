import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown2Outlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.75 8.5c0 .13-.033.262-.104.382-.447.754-4.455 7.368-7.646 7.368S4.801 9.637 4.354 8.882a.75.75 0 1 1 1.292-.764c1.52 2.564 4.587 6.632 6.354 6.632 1.77 0 4.837-4.068 6.354-6.632a.75.75 0 0 1 1.396.383"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDown2Outlinecurved;
