import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeOutlinecurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.18 4.272C6.713 2.582 9.089 2 12.29 2c.927 0 1.781.051 2.552.157a.75.75 0 0 1 .415.2l5.67 5.4a.75.75 0 0 1 .22.41c.201 1.107.293 2.384.293 3.833 0 3.5-.519 6.065-2.032 7.732C17.874 21.42 15.495 22 12.29 22c-3.201 0-5.577-.58-7.11-2.269C3.67 18.065 3.15 15.5 3.15 12c0-3.495.519-6.06 2.03-7.728M6.293 5.28C5.182 6.505 4.65 8.565 4.65 12c0 3.44.531 5.5 1.642 6.723C7.382 19.925 9.2 20.5 12.29 20.5c3.094 0 4.916-.575 6.007-1.777C19.41 17.5 19.94 15.44 19.94 12c0-1.282-.075-2.386-.227-3.328L14.4 3.612A18 18 0 0 0 12.29 3.5c-3.088 0-4.908.577-5.998 1.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.184 2.083a.75.75 0 0 1 .75.75v2.66a2.613 2.613 0 0 0 2.614 2.614H20.5a.75.75 0 0 1 0 1.5h-2.95a4.113 4.113 0 0 1-4.115-4.113V2.833a.75.75 0 0 1 .75-.75M8.912 12.98a.75.75 0 0 1 .75-.75h4.9a.75.75 0 0 1 0 1.5h-4.9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperNegativeOutlinecurved;
