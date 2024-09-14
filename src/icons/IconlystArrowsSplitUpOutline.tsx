import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitUpOutline = ({
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
      d="M6 2.25a.75.75 0 0 1 .75.75v5.397c0 1.323.776 2.625 2.187 3.448l.881.514c1.797 1.048 2.932 2.804 2.932 4.744V21a.75.75 0 0 1-1.5 0v-3.897c0-1.323-.776-2.625-2.187-3.448l-.881-.514C6.386 12.093 5.25 10.337 5.25 8.397V3A.75.75 0 0 1 6 2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18 2.25a.75.75 0 0 1 .75.75v5.395c0 1.94-1.136 3.698-2.934 4.746l-.876.51c-1.413.823-2.19 2.125-2.19 3.449V21a.75.75 0 0 1-1.5 0v-3.9c0-1.94 1.137-3.698 2.934-4.745l.876-.51c1.414-.823 2.19-2.126 2.19-3.45V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.47 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L18 4.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06zM5.47 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L6 4.06 4.03 6.03a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsSplitUpOutline;
