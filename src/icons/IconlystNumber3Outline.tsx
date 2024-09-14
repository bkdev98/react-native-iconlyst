import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.751 8.381a4.748 4.748 0 1 1 9.497 0 4.75 4.75 0 0 1-2.185 4 4.75 4.75 0 1 1-7.313 4 .75.75 0 0 1 1.5 0 3.25 3.25 0 1 0 3.25-3.249.75.75 0 0 1 0-1.5 3.25 3.25 0 0 0 0-6.5 3.25 3.25 0 0 0-3.249 3.25.75.75 0 1 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber3Outline;
