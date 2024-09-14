import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight2Outlinecurved = ({
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
      d="M8.5 19.75c.13 0 .262-.033.382-.104.754-.447 7.368-4.455 7.368-7.646S9.637 4.801 8.882 4.354a.75.75 0 1 0-.764 1.292c2.564 1.52 6.632 4.587 6.632 6.354 0 1.77-4.068 4.837-6.632 6.354A.75.75 0 0 0 8.5 19.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRight2Outlinecurved;
