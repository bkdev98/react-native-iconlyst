import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLycheeLight = ({
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
      d="M11.315 6.715a1.02 1.02 0 0 1 1.37 0l.334.303c.264.238.632.323.973.222l.433-.128a1.02 1.02 0 0 1 1.234.594l.17.418c.133.33.43.565.78.623l.445.072c.518.085.887.547.854 1.07l-.028.45a1.02 1.02 0 0 0 .433.9l.37.259c.429.3.56.878.304 1.335l-.22.393a1.02 1.02 0 0 0 0 .999l.22.393a1.02 1.02 0 0 1-.304 1.335l-.37.258a1.02 1.02 0 0 0-.433.9l.028.45a1.02 1.02 0 0 1-.854 1.07l-.445.073a1.02 1.02 0 0 0-.78.623l-.17.418a1.02 1.02 0 0 1-1.234.594l-.433-.128a1.02 1.02 0 0 0-.973.222l-.334.303a1.02 1.02 0 0 1-1.37 0l-.334-.303a1.02 1.02 0 0 0-.973-.222l-.433.128a1.02 1.02 0 0 1-1.234-.594l-.17-.418a1.02 1.02 0 0 0-.78-.623l-.445-.072a1.02 1.02 0 0 1-.854-1.07l.028-.451a1.02 1.02 0 0 0-.433-.9l-.37-.258a1.02 1.02 0 0 1-.304-1.335l.22-.393a1.02 1.02 0 0 0 0-.999l-.22-.393a1.02 1.02 0 0 1 .305-1.335l.37-.259a1.02 1.02 0 0 0 .432-.9l-.028-.45a1.02 1.02 0 0 1 .854-1.07l.445-.072a1.02 1.02 0 0 0 .78-.623l.17-.418a1.02 1.02 0 0 1 1.234-.594l.433.128c.34.1.71.016.973-.222z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.686 6.95C14.413 3.602 12.382 3 10.753 3c-.389 2.56 1.036 3.452 2.933 3.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.664 7.18c-.085-.623.518-2.793 2.613-3.801M10.211 10.074a1.083 1.083 0 0 1-.208 1.996M15.821 12.033a1.083 1.083 0 0 1-1.874-.718M14.668 16.051a1.083 1.083 0 0 1-1.874-.718M9.598 16.168a1.083 1.083 0 0 0-1.559-1.264"
    />
  </Svg>
);
export default IconlystLycheeLight;
