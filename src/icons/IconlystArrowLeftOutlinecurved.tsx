import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftOutlinecurved = ({
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
      d="M10.195 18.684a.75.75 0 0 0 .711-1.32c-1.881-1.015-4.71-3.007-5.466-4.614H19.5a.75.75 0 0 0 0-1.5H5.442c.757-1.61 3.584-3.6 5.464-4.615a.75.75 0 0 0-.711-1.32C9.534 5.67 3.75 8.88 3.75 12.002c0 3.12 5.784 6.327 6.445 6.682"
    />
  </Svg>
);
export default IconlystArrowLeftOutlinecurved;
