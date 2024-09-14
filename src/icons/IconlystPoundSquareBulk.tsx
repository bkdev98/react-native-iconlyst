import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundSquareBulk = ({
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
      d="M16.218 2.563H7.784c-3.161 0-5.284 2.222-5.284 5.53v7.95c0 3.302 2.123 5.52 5.284 5.52h8.433c3.16 0 5.283-2.218 5.283-5.52v-7.95c0-3.308-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.38 11.452c-.027-.034-.046-.072-.074-.106l-.003-.002a1.557 1.557 0 0 1 .232-2.156 1.57 1.57 0 0 1 2.205.195.75.75 0 0 0 1.15-.963 3.07 3.07 0 0 0-4.315-.385 3.03 3.03 0 0 0-.896 3.417h-.882a.75.75 0 0 0 0 1.5h1.646c.09.4.041.822-.176 1.151-.389.501-.806.986-1.24 1.441a.749.749 0 0 0 .542 1.268h4.63a.75.75 0 0 0 0-1.5H11.22q.131-.165.263-.334a3.06 3.06 0 0 0 .482-2.026h1.46a.75.75 0 1 0 0-1.5z"
    />
  </Svg>
);
export default IconlystPoundSquareBulk;
