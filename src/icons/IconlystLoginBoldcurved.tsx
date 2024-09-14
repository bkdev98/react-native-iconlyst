import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBoldcurved = ({
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
      d="M3 11.37a.749.749 0 1 0 0 1.5h4.05q-.015-.75 0-1.5zM14.65 2.25c-5.3 0-7.13 1.3-7.5 5.33v.02c-.07 1.25-.1 2.51-.1 3.77h6.31l-1.64-1.63a.754.754 0 0 1 0-1.06c.29-.3.77-.3 1.06-.01l2.93 2.92a.75.75 0 0 1 0 1.06l-2.93 2.92a.75.75 0 0 1-.53.22c-.19 0-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l1.65-1.64H7.05c0 1.18.04 2.36.1 3.55.37 4.03 2.2 5.33 7.5 5.33 7.6 0 7.6-2.85 7.6-9.75s0-9.75-7.6-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoginBoldcurved;
