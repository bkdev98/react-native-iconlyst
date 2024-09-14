import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardCheckBulk = ({
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
      d="M16.893 4.383c-.12-.036-.238.054-.256.178a2.48 2.48 0 0 1-2.447 2.12H9.81a2.49 2.49 0 0 1-2.457-2.12c-.018-.124-.136-.213-.256-.178A4.25 4.25 0 0 0 4.07 8.461v8.9c0 2.34 1.9 4.25 4.25 4.25h7.36c2.35 0 4.25-1.91 4.25-4.25v-8.9a4.25 4.25 0 0 0-3.037-4.078"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.81 5.48h4.38c.68 0 1.24-.54 1.26-1.22.01-.02.01-.04.01-.06v-.54c0-.7-.57-1.27-1.27-1.27H9.81c-.7 0-1.28.57-1.28 1.27v.54c0 .02 0 .03.01.05.02.69.59 1.23 1.27 1.23M15.49 12.45l-3.97 3.97a.75.75 0 0 1-1.06 0l-1.95-1.94a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.06 0l1.42 1.41 3.44-3.44c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardCheckBulk;