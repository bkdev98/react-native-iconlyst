import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorAddBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.174 13.267-.464-2.304C4.38 9.493 5.99 8.36 7.263 9.167l8.271 4.933c1.27.805.933 2.746-.535 3.075l-3.452.774a.4.4 0 0 0-.245.172l-1.664 2.6c-.809 1.265-2.743.924-3.072-.541l-.726-3.604M16.884 3.5a2.82 2.82 0 1 1-2.82 2.82"
    />
  </Svg>
);
export default IconlystMouseCursorAddBroken;
