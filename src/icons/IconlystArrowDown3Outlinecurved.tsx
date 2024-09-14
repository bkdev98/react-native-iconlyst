import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown3Outlinecurved = ({
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
      d="M17.04 14.863c.188-.453.354-.936.354-1.366 0-.31-.085-.59-.31-.813-.465-.464-2.323-.721-4.334-.772V3.695a.75.75 0 0 0-1.5 0v8.218c-2.007.051-3.859.308-4.323.772-.563.564-.276 1.497.034 2.25.65 1.573 3.398 6.12 5.046 6.12 1.7 0 4.436-4.75 5.033-6.192m-1.165-1.178c-.24 1.296-2.911 5.363-3.87 5.849-.996-.484-3.691-4.552-3.89-5.825 1.255-.413 6.558-.406 7.76-.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDown3Outlinecurved;
