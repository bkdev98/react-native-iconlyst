import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSortBroken = ({
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
      d="M11.452 19.844H7.437C4.787 19.851 3 17.674 3 14.997V9.011c0-2.675 1.786-4.855 4.437-4.855h1.061M20.431 10.64V9.01c0-2.675-1.786-4.855-4.437-4.855h-4.278M13.998 16.358l1.46-1.409 1.46 1.41M21 18.367l-1.46 1.409-1.46-1.409M15.459 14.951v4.894M19.541 19.773v-4.894"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.86 9.256-3.873 3.148c-.73.58-1.763.58-2.493 0L6.59 9.256"
    />
  </Svg>
);
export default IconlystEmailSortBroken;
