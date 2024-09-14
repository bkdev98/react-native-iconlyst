import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet4TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.994 3H8c-.595 0-1.161.25-1.563.687L5.31 4.917a2.12 2.12 0 0 0-.556 1.433v11.3c0 .531.198 1.042.556 1.433l1.128 1.23A2.12 2.12 0 0 0 8.001 21h8.993c.594 0 1.16-.25 1.563-.687l1.127-1.23a2.12 2.12 0 0 0 .558-1.433V6.35a2.12 2.12 0 0 0-.558-1.433l-1.129-1.23A2.12 2.12 0 0 0 16.995 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.53 10.22a4.004 4.004 0 0 1 3.968-4.545 4.004 4.004 0 0 1 3.968 4.545l-.718 5.27a3.28 3.28 0 0 1-6.5 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.193 14.998h-4.44m15.49 0h-4.438M8.773 12h-4.02m15.49 0h-4.02M8.554 9.005H4.756m15.49 0h-3.808M12.5 9.482v-.077m0-.405a.4.4 0 1 0 0 .8.4.4 0 0 0 0-.8"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystToilet4TwoTone;
