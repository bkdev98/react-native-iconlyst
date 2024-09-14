import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMakerBold = ({
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
      d="M17.823 14.37a.75.75 0 0 1-1.5 0v-3.42l-2.479 1.477v1.943a.75.75 0 0 1-1.5 0V12c0-.264.138-.509.366-.644l3.979-2.37a.75.75 0 0 1 1.134.644zm-6.253 0a.75.75 0 0 1-1.5 0v-1.943L7.592 10.95v3.42a.75.75 0 0 1-1.5 0V9.63a.75.75 0 0 1 1.133-.644l3.979 2.37a.75.75 0 0 1 .366.644zM16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMakerBold;
