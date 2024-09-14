import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownOutlinecurved = ({
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
      d="M18.684 13.805a.75.75 0 0 0-1.32-.711c-1.015 1.881-3.007 4.711-4.614 5.466V4.5a.75.75 0 0 0-1.5 0v14.058c-1.61-.757-3.6-3.584-4.615-5.464a.75.75 0 0 0-1.32.711c.355.661 3.564 6.445 6.687 6.445 3.12 0 6.327-5.784 6.682-6.445"
    />
  </Svg>
);
export default IconlystArrowDownOutlinecurved;
