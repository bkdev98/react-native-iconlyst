import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAparatBroken = ({
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
      d="M6.217 10.25a6.764 6.764 0 1 1-.197 2.447"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.661 13.78a1.082 1.082 0 1 0 .765 1.325M10.206 12.586a1.082 1.082 0 1 1-1.325.765M15.855 9.324a1.082 1.082 0 1 0 .764 1.325M11.4 8.13a1.082 1.082 0 1 0 .764 1.326M19.072 18.852a2.9 2.9 0 0 1-3.549 2.049M3.85 14.773a2.896 2.896 0 0 0 2.049 3.549M21.65 9.228a2.896 2.896 0 0 0-2.048-3.548M6.428 5.148A2.9 2.9 0 0 1 9.976 3.1"
    />
  </Svg>
);
export default IconlystAparatBroken;
