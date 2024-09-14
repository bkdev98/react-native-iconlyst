import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBulkcurved = ({
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
      d="M19.677 4.576a10.43 10.43 0 0 0-7.424-3.073 10.43 10.43 0 0 0-7.424 3.073C1.727 7.68.88 12.441 2.706 16.376c.033.161-.056.82-.12 1.302-.242 1.806-.366 3.132.247 3.746.612.613 1.937.49 3.743.246.482-.064 1.149-.15 1.253-.139 1.406.651 2.909.966 4.4.966a10.53 10.53 0 0 0 7.448-3.07c4.093-4.095 4.094-10.757 0-14.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.196 12.416c0 .553.453 1 1.005 1a1 1 0 1 0 0-2h-.01a.996.996 0 0 0-.995 1M11.187 12.416a1.003 1.003 0 0 0 2.005 0 1 1 0 0 0-1-1h-.01a.996.996 0 0 0-.995 1M7.178 12.416a1.003 1.003 0 0 0 2.004 0 1 1 0 0 0-1-1h-.009a.995.995 0 0 0-.995 1"
    />
  </Svg>
);
export default IconlystChatBulkcurved;
