import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHardwarewalletBulk = ({
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
      d="m12.11 6.492-.02.02c-.65-.51-1.59-.48-2.19.11l-5.25 5.25A5.7 5.7 0 0 0 3 15.862c0 1.49.6 2.94 1.65 3.99a5.57 5.57 0 0 0 3.99 1.65c1.51 0 2.93-.58 3.99-1.65l5.25-5.25c.31-.31.48-.72.48-1.16 0-.38-.13-.74-.37-1.02l.006-.007L13.57 7.96l-.409-.408.001-.002z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m17.996 12.415 3.694-3.694c.36-.36.56-.83.56-1.34s-.2-.98-.55-1.34l-3.24-3.24c-.74-.73-1.93-.73-2.67 0l-3.68 3.69 1.051 1.06 3.679-3.68c.16-.15.41-.15.56-.01l3.24 3.25a.372.372 0 0 1-.01.54l-3.68 3.69-3.381-3.38z"
    />
    <Path
      fill={props.color}
      d="M17.658 5.238a.75.75 0 0 0-1.06-.006l-.404.4a.748.748 0 0 0 .527 1.283.75.75 0 0 0 .527-.217l.404-.399a.75.75 0 0 0 .006-1.06M18.207 6.85l-.404.41a.75.75 0 0 0 1.068 1.053l.404-.41a.751.751 0 0 0-1.068-1.053M8.64 17.832c.53 0 1.02-.21 1.39-.58.76-.76.76-2.01 0-2.77-.74-.75-2.04-.75-2.78 0-.37.37-.57.86-.57 1.38 0 .53.2 1.02.57 1.39s.87.58 1.39.58"
    />
  </Svg>
);
export default IconlystHardwarewalletBulk;
