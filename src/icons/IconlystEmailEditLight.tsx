import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailEditLight = ({
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
      d="M20.15 10.441V8.84c0-2.633-1.758-4.777-4.365-4.777h-8.42C4.759 4.063 3 6.207 3 8.84v5.89c0 2.633 1.758 4.775 4.366 4.769h4.131"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.812 19.81-.69.116a.773.773 0 0 1-.897-.845l.077-.713c.037-.344.181-.667.412-.926l3.008-3.283a.95.95 0 0 1 1.34-.052l.634.588a.95.95 0 0 1 .052 1.34l-2.975 3.246c-.25.28-.59.467-.96.53"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.637 9.08-3.81 3.099c-.719.57-1.734.57-2.453 0L6.531 9.08"
    />
  </Svg>
);
export default IconlystEmailEditLight;
