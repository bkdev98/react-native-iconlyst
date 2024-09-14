import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeftRightBroken = ({
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
      d="M14.218 20.833c-2.525.461-5.536-.019-6.819-1.614-1.242-1.545-2.208-3.42-2.816-5.1-.327-.901.152-1.873 1.047-2.216a1.84 1.84 0 0 1 2.171.672l1.202 1.745V4.68a1.68 1.68 0 0 1 3.36-.026l.068 4.348c2.352.225 5.757.103 6.708 2.67.957 2.583.015 6.002-1.662 7.679M5.732 4.059 4.479 5.31l1.253 1.253M15.722 4.059l1.253 1.252-1.253 1.253"
    />
  </Svg>
);
export default IconlystSwipeLeftRightBroken;