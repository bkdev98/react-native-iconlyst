import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentTextTwoTone = ({
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
      d="M9.559 12.577v-.981c0-.27.22-.49.49-.49h4.904c.27 0 .49.22.49.49v.981M13.972 16.99h-2.943m1.47-5.884v5.884"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.286 3c.557 0 1.092.227 1.478.63l3.791 3.95c.367.38.571.89.571 1.42v8.163A3.81 3.81 0 0 1 16.47 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V6.657A3.746 3.746 0 0 1 8.634 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.063v2.892a2.56 2.56 0 0 0 2.554 2.56h2.738"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDcoumentTextTwoTone;
