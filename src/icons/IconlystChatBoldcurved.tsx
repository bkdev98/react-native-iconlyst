import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBoldcurved = ({
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
      d="M16.2 13.416a1.004 1.004 0 0 1-1.004-1c0-.553.443-1 .996-1h.009a1 1 0 1 1 0 2m-4.008 0a1.003 1.003 0 0 1-1.005-1c0-.553.444-1 .996-1h.009a1 1 0 1 1 0 2m-4.01 0a1.003 1.003 0 0 1-1.003-1c0-.553.442-1 .995-1h.009a1 1 0 1 1 0 2m11.495-8.84a10.43 10.43 0 0 0-7.424-3.073 10.43 10.43 0 0 0-7.424 3.073C1.727 7.679.88 12.441 2.706 16.375c.033.162-.056.821-.12 1.303-.242 1.806-.366 3.132.247 3.746.612.613 1.937.489 3.743.246.482-.064 1.149-.15 1.253-.139 1.406.651 2.909.966 4.4.966a10.53 10.53 0 0 0 7.448-3.07c4.093-4.095 4.094-10.757 0-14.851"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatBoldcurved;
