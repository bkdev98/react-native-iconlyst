import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalMaximizeOutline = ({
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
      d="M8.086 7.914a.75.75 0 0 1 0 1.06L5.81 11.25h4.412a.75.75 0 0 1 0 1.5H5.81l2.275 2.275a.75.75 0 1 1-1.06 1.061L3.47 12.531a.75.75 0 0 1 0-1.061l3.555-3.556a.75.75 0 0 1 1.06 0M15.914 7.914a.75.75 0 0 1 1.06 0l3.556 3.556a.75.75 0 0 1 0 1.06l-3.555 3.556a.75.75 0 1 1-1.06-1.06l2.274-2.276h-4.411a.75.75 0 0 1 0-1.5h4.411l-2.275-2.275a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsHorizontalMaximizeOutline;
