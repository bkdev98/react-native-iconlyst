import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskRecevieTwoTone = ({
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
      d="M3.585 6.965C3.978 4.593 5.71 3 8.282 3h6.323c.66 0 1.29.269 1.745.744l4.476 4.66c.431.452.674 1.053.674 1.677v5.893C21.5 18.92 19.666 21 16.716 21H8.282C5.334 21 3.5 18.92 3.5 15.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.751 13.207 1.97-1.969L8.75 9.27M10.72 11.238H3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.557 3v2.657M8.557 21v-3.324c0-1.013.82-1.834 1.833-1.834h4.222c1.012 0 1.833.821 1.833 1.834V21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFloppyDiskRecevieTwoTone;
