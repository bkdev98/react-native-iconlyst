import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiredBold = ({
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
      d="M16.932 10.094a.75.75 0 0 1-.797 1.271l-1.8-1.126a.754.754 0 0 1 .002-1.273l1.8-1.119a.75.75 0 0 1 .793 1.273l-.779.485zm-2.044 6.767H9.114c-.277 0-.5-.204-.5-.456 0-1.811 1.519-3.284 3.386-3.284 1.869 0 3.388 1.473 3.388 3.284 0 .252-.224.456-.5.456M7.469 11.48a.751.751 0 0 1-.399-1.386l.781-.489-.779-.485a.75.75 0 1 1 .793-1.273l1.799 1.119a.748.748 0 0 1 .002 1.273l-1.799 1.126a.75.75 0 0 1-.398.115m8.748-8.98H7.783C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.283 5.527h8.433c3.16 0 5.284-2.221 5.284-5.527V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiredBold;
