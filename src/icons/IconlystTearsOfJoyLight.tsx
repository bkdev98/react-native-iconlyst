import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTearsOfJoyLight = ({
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
      d="M20.263 8.428A9.003 9.003 0 0 0 3.512 9M3.05 12.973c-.211.858.27 1.714 1.074 1.911.805.198 1.628-.337 1.839-1.195C6.345 12.135 5.079 11 5.079 11s-1.647.419-2.03 1.973M20.985 12.973c.211.858-.27 1.714-1.075 1.911s-1.627-.337-1.838-1.195c-.382-1.554.884-2.689.884-2.689s1.647.419 2.03 1.973"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.685 9.542a1.307 1.307 0 0 1 2.583 0M13.732 9.542a1.296 1.296 0 0 1 1.286-1.112c.657 0 1.202.478 1.298 1.112M5.292 18A8.98 8.98 0 0 0 12 21a8.98 8.98 0 0 0 6.708-3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.87 13.64c0 1.703-1.285 3.085-2.869 3.085s-2.868-1.382-2.868-3.084z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTearsOfJoyLight;
