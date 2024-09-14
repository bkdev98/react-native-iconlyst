import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHardwarewalletBold = ({
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
      d="m17.707 6.849-.404.41a.75.75 0 0 0 1.068 1.053l.404-.41a.751.751 0 0 0-1.068-1.053M17.158 5.237a.75.75 0 0 0-1.06-.006l-.404.4a.748.748 0 0 0 .527 1.283.75.75 0 0 0 .527-.217l.404-.399a.75.75 0 0 0 .006-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.13 7.65-3.68 3.69-3.79-3.79 3.68-3.68c.16-.15.41-.15.56-.01l3.24 3.25a.372.372 0 0 1-.01.54m-10.6 9.6a1.95 1.95 0 0 1-2.78 0c-.37-.37-.57-.86-.57-1.39 0-.52.2-1.01.57-1.38.74-.75 2.04-.75 2.78 0 .76.76.76 2.01 0 2.77m12.22-9.87c0-.51-.2-.98-.55-1.34L17.96 2.8c-.74-.73-1.93-.73-2.67 0l-3.7 3.71C10.94 6 10 6.03 9.4 6.62l-5.25 5.25a5.7 5.7 0 0 0-1.65 3.99c0 1.49.6 2.94 1.65 3.99a5.57 5.57 0 0 0 3.99 1.65c1.51 0 2.93-.58 3.99-1.65l5.25-5.25c.31-.31.48-.72.48-1.16 0-.38-.13-.74-.37-1.02l3.7-3.7c.36-.36.56-.83.56-1.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHardwarewalletBold;
