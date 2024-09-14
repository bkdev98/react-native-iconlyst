import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.63 9.886c0-3.495 2.855-6.35 6.35-6.35s6.351 2.855 6.351 6.35v7.819c0 .836-.677 1.513-1.512 1.513H7.142a1.513 1.513 0 0 1-1.512-1.513zm6.35-4.85c-2.666 0-4.85 2.184-4.85 4.85v7.825l.008.007h9.685l.006-.006.001-.002.001-.005v-7.82c0-2.665-2.185-4.85-4.85-4.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.729 17.719a.75.75 0 0 1 .75.75v2.533a.75.75 0 0 1-1.5 0v-2.533a.75.75 0 0 1 .75-.75M14.022 17.719a.75.75 0 0 1 .75.75v2.533a.75.75 0 0 1-1.5 0v-2.533a.75.75 0 0 1 .75-.75M7.095 2.374a.75.75 0 0 1 1.039.213L9.44 4.565a.75.75 0 0 1-1.252.826L6.882 3.413a.75.75 0 0 1 .213-1.039M16.875 2.382a.75.75 0 0 1 .193 1.043l-1.36 1.978a.75.75 0 0 1-1.236-.85l1.36-1.978a.75.75 0 0 1 1.043-.193M3.105 9.777a.75.75 0 0 1 .75.75v5.59a.75.75 0 0 1-1.5 0v-5.59a.75.75 0 0 1 .75-.75M20.897 9.777a.75.75 0 0 1 .75.75v5.59a.75.75 0 0 1-1.5 0v-5.59a.75.75 0 0 1 .75-.75M5.63 10.21a.75.75 0 0 1 .75-.75h11.203a.75.75 0 1 1 0 1.5H6.381a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidOutline;
