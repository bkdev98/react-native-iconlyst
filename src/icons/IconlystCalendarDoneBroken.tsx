import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDoneBroken = ({
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
      d="m7.582 15.116.762.761 1.483-1.482M7.582 10.264l.762.762 1.483-1.483M12.432 15.77h3.987M12.432 10.922h3.987M15.64 3v2.576M8.37 3v2.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.807 21.001c2.651 0 4.293-1.48 4.293-4.187V8.6c.008-2.707-1.634-4.18-4.286-4.18h-7.62c-2.643 0-4.294 1.473-4.294 4.18v8.145C3.9 19.494 5.55 21 8.194 21h4.052"
    />
  </Svg>
);
export default IconlystCalendarDoneBroken;
