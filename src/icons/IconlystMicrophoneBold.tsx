import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneBold = ({
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
      d="M19.207 10.037h-.002a.75.75 0 0 0-.748.752c.008 3.568-2.888 6.478-6.452 6.49L12 17.276h-.003a6.43 6.43 0 0 1-4.569-1.907 6.43 6.43 0 0 1-1.885-4.58.75.75 0 0 0-.748-.753h-.002a.75.75 0 0 0-.75.748 7.92 7.92 0 0 0 2.322 5.644 7.9 7.9 0 0 0 4.885 2.31v2.136a.75.75 0 0 0 1.5 0v-2.137c4.046-.388 7.217-3.809 7.207-7.953a.75.75 0 0 0-.75-.748"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.44 7.587h1.12a.75.75 0 0 1 0 1.5h-1.12a.75.75 0 0 1 0-1.5m-.19-1.698a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755.747.747 0 0 1-.75-.746zm.75 5.652a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m.002 3.391a4.173 4.173 0 0 0 4.158-4.175V6.534A4.164 4.164 0 0 0 12 2.375a4.164 4.164 0 0 0-4.16 4.159v4.222a4.14 4.14 0 0 0 1.213 2.949 4.14 4.14 0 0 0 2.95 1.227"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrophoneBold;
