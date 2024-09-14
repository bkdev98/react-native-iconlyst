import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitLeftOutline = ({
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
      d="M17.103 12.75c-1.323 0-2.625.776-3.448 2.188l-.514.88c-1.048 1.797-2.804 2.932-4.744 2.932H3a.75.75 0 0 1 0-1.5h5.397c1.323 0 2.625-.776 3.448-2.187l.514-.881c1.048-1.796 2.804-2.932 4.744-2.932H21a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h5.395c1.94 0 3.698 1.136 4.746 2.934l.51.876c.823 1.413 2.125 2.19 3.449 2.19H21a.75.75 0 0 1 0 1.5h-3.9c-1.94 0-3.698-1.137-4.745-2.934l-.51-.876c-.823-1.414-2.126-2.19-3.45-2.19H3A.75.75 0 0 1 2.25 6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.03 2.97a.75.75 0 0 1 0 1.06L4.06 6l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0M6.03 14.97a.75.75 0 0 1 0 1.06L4.06 18l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsSplitLeftOutline;
