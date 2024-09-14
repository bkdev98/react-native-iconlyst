import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTearsOfJoyBroken = ({
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
      d="M12.25 3a9 9 0 0 1 8.264 5.428M3.762 8.998a9.03 9.03 0 0 1 5.123-5.35M3.3 12.973c-.211.858.27 1.714 1.074 1.911.805.198 1.628-.337 1.839-1.195C6.595 12.135 5.329 11 5.329 11M21.235 12.973c.211.858-.27 1.714-1.075 1.911s-1.627-.337-1.838-1.195c-.382-1.554.884-2.689.884-2.689M7.935 9.54a1.307 1.307 0 0 1 2.583 0M13.983 9.54a1.296 1.296 0 0 1 1.285-1.112c.658 0 1.203.478 1.298 1.112M5.542 18a8.98 8.98 0 0 0 6.708 3 8.98 8.98 0 0 0 6.708-3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.119 13.639c0 1.702-1.284 3.084-2.868 3.084s-2.869-1.382-2.869-3.084z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTearsOfJoyBroken;
