import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItalicBold = ({
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
      d="M14.915 8.67h-1.183l-1.903 6.66h.756a.75.75 0 0 1 0 1.5H9.086a.75.75 0 0 1 0-1.5h1.183l1.904-6.66h-.755a.75.75 0 0 1 0-1.5h3.497a.75.75 0 0 1 0 1.5m1.303-6.17H7.783C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.434c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystItalicBold;
