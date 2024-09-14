import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet4Broken = ({
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
      d="M11.997 3H7.501c-.595 0-1.161.25-1.563.687L4.81 4.917a2.12 2.12 0 0 0-.556 1.433v11.3c0 .531.198 1.042.556 1.433l1.128 1.23A2.12 2.12 0 0 0 7.501 21h8.993c.594 0 1.16-.25 1.563-.687l1.127-1.23a2.12 2.12 0 0 0 .558-1.433V6.35a2.12 2.12 0 0 0-.558-1.433l-1.129-1.23A2.12 2.12 0 0 0 16.495 3H15.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 18.327a3.28 3.28 0 0 1-3.25-2.837l-.717-5.27a4.004 4.004 0 0 1 3.967-4.544 4.004 4.004 0 0 1 3.968 4.544l-.718 5.27a3.28 3.28 0 0 1-1.187 2.108M8.693 14.998h-4.44m15.49 0h-4.438M8.273 12h-4.02m15.49 0h-4.02M8.054 9.004H4.256m15.49 0h-3.808"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.482v-.077M12 9a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8"
    />
  </Svg>
);
export default IconlystToilet4Broken;
