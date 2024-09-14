import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSortLight = ({
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
      d="M20.43 10.64V9.01c0-2.675-1.786-4.855-4.436-4.855H7.437C4.787 4.156 3 6.336 3 9.011v5.986c0 2.677 1.786 4.854 4.437 4.847h4.015"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.998 16.36 1.46-1.41 1.46 1.41M21 18.366l-1.46 1.41-1.46-1.41M15.459 14.95v4.894M19.541 19.774V14.88M16.86 9.256l-3.873 3.148c-.73.58-1.763.58-2.493 0L6.59 9.256"
    />
  </Svg>
);
export default IconlystEmailSortLight;
