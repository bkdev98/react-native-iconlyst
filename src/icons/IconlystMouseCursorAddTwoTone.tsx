import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorAddTwoTone = ({
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
      d="m15.499 17.175-3.452.774a.4.4 0 0 0-.245.172l-1.664 2.6c-.809 1.265-2.743.924-3.072-.541L5.21 10.963C4.88 9.493 6.49 8.36 7.763 9.167l8.271 4.933c1.27.805.933 2.746-.535 3.075"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.384 3.5v5.637m2.819-2.819h-5.638"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMouseCursorAddTwoTone;
