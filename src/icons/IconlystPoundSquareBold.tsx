import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.306 11.347c.028.034.047.072.073.106h2.046a.75.75 0 0 1 0 1.5h-1.459a3.06 3.06 0 0 1-.482 2.026q-.132.17-.263.334h2.977a.75.75 0 0 1 0 1.5H9.569a.75.75 0 0 1-.542-1.268c.434-.456.851-.94 1.24-1.441.217-.33.265-.751.176-1.151H8.797a.75.75 0 1 1 0-1.5h.882a3.03 3.03 0 0 1 .896-3.417 3.07 3.07 0 0 1 4.315.385.75.75 0 0 1-1.15.963 1.57 1.57 0 0 0-2.205-.196 1.557 1.557 0 0 0-.232 2.156zm4.912-8.784H7.784c-3.161 0-5.284 2.222-5.284 5.53v7.95c0 3.302 2.123 5.52 5.284 5.52h8.433c3.16 0 5.283-2.218 5.283-5.52v-7.95c0-3.308-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoundSquareBold;
