import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskRecevieLight = ({
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
      d="M3.085 6.965C3.478 4.593 5.21 3 7.782 3h6.323c.66 0 1.29.269 1.745.744l4.476 4.66c.431.452.674 1.053.674 1.677v5.893C21 18.92 19.166 21 16.216 21H7.782C4.834 21 3 18.92 3 15.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.251 13.207 1.97-1.969L8.25 9.27M10.22 11.238H3M8.057 3v2.657M8.057 21v-3.324c0-1.013.82-1.834 1.833-1.834h4.222c1.012 0 1.833.821 1.833 1.834V21"
    />
  </Svg>
);
export default IconlystFloppyDiskRecevieLight;
