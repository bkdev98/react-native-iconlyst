import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMistLight = ({
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
      d="M11.19 19.527h9.924M13.04 4.473H3.113M4.964 19.527h2.762M19.266 4.473h-2.762M21.114 9.475h-3.23M3.396 14.477h3.23M9.505 9.475h-4.26M15.006 14.477h4.26M14.48 9.475h-1.572M10.03 14.477H11.6"
    />
  </Svg>
);
export default IconlystMistLight;
