import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopLeftOutline = ({
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
      d="M7 5.25A2.25 2.25 0 0 0 4.75 7.5v6A2.25 2.25 0 0 0 7 15.75h1a.75.75 0 0 1 0 1.5H7a3.75 3.75 0 0 1-3.75-3.75v-6A3.75 3.75 0 0 1 7 3.75h10a3.75 3.75 0 0 1 3.75 3.75v6A3.75 3.75 0 0 1 17 17.25h-3.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17a2.25 2.25 0 0 0 2.25-2.25v-6A2.25 2.25 0 0 0 17 5.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopLeftOutline;
