import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHomeOutline = ({
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
      d="M9.997 3.028a3.61 3.61 0 0 1 4.479 0l.003.002 5.916 4.723a2.95 2.95 0 0 1 1.154 2.288v8.776a2.934 2.934 0 0 1-2.933 2.933H16.83a2.72 2.72 0 0 1-2.72-2.72v-4.08c0-.578-.47-1.047-1.048-1.047h-1.575c-.578 0-1.046.468-1.046 1.047v4.08a2.72 2.72 0 0 1-2.721 2.72H5.883a2.934 2.934 0 0 1-2.934-2.933v-8.763c.01-.903.436-1.75 1.155-2.297zm.931 1.176-5.893 4.73-.018.013a1.43 1.43 0 0 0-.568 1.12v8.75c0 .79.642 1.433 1.434 1.433H7.72c.674 0 1.22-.547 1.22-1.22v-4.08a2.546 2.546 0 0 1 2.547-2.547h1.575a2.547 2.547 0 0 1 2.547 2.547v4.08c0 .673.547 1.22 1.22 1.22h1.787c.791 0 1.433-.642 1.433-1.433V10.06c-.009-.44-.219-.853-.57-1.12l-.013-.01-5.92-4.726-.002-.001a2.11 2.11 0 0 0-2.616 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeHomeOutline;
