import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoBulk = ({
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
      d="M17.319 14.39v2.97c0 .15-.01.31-.02.45-.18 2.23-1.71 3.69-3.9 3.69h-6.02c-2.34 0-3.92-1.66-3.92-4.14v-2.97c0-2.47 1.58-4.14 3.92-4.14h6.02c2.19 0 3.72 1.47 3.9 3.69v.01c.01.14.02.29.02.44"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.208 13.395-.02 4.98c0 .91-.74 1.65-1.64 1.65-.38 0-.75-.13-1.05-.38l-2.2-1.84c.01-.14.02-.3.02-.45v-2.97c0-.15-.01-.3-.02-.44v-.01l2.22-1.83c.34-.29.76-.42 1.21-.37.43.04.83.25 1.11.6.24.3.37.68.37 1.06M12.949 15.18h-2.52a.75.75 0 0 1 0-1.5h2.52a.75.75 0 0 1 0 1.5M13.42 2.5c-1.873 0-3.395 1.543-3.395 3.439 0 1.892 1.522 3.431 3.394 3.431s3.394-1.539 3.394-3.431c0-1.896-1.522-3.439-3.394-3.439M6.481 4.59c-1.303 0-2.364 1.072-2.364 2.39s1.061 2.39 2.364 2.39c1.304 0 2.364-1.072 2.364-2.39s-1.06-2.39-2.364-2.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraVideoBulk;
