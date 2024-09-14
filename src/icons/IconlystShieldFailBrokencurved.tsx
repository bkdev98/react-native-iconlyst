import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailBrokencurved = ({
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
      d="M15.626 20.4c2.16-1.23 4.297-3.648 4.297-7.7 0-6.403.278-6.904-.338-7.52s-3.826-2.607-7.334-2.607c-3.51 0-6.72 1.99-7.336 2.607-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.674 8.728M14.13 13.646l-3.76-3.758M10.37 13.646l3.76-3.758"
    />
  </Svg>
);
export default IconlystShieldFailBrokencurved;
