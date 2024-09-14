import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSushiSwapBold = ({
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
      d="M20.8 13.8c-.3.45-.97.69-1.87.69-.71 0-1.56-.15-2.49-.45a8 8 0 0 1-.26-.09c-1.07-.37-2.24-.94-3.43-1.74C10.21 10.53 8.34 8.34 8 6.64c-.11-.49-.06-.89.12-1.19l.01-.01c0-.01.01-.01.01-.02.3-.45.95-.69 1.86-.69.29 0 .61.03.96.08 1.61.24 3.47 1.02 5.24 2.19 3.72 2.47 5.41 5.57 4.6 6.8m-7.73 2.13c-.67.06-1.06-.44-1.66-1.26-.21-.28-.41-.56-.62-.79-1-1.11-2.46-1.39-3.8-.72-.53.27-.83.49-1.13.76-1.24-1.55-1.66-2.96-1.18-3.69l1.99-2.76c.63 1.98 2.59 4.23 5.25 5.99.92.62 1.86 1.12 2.77 1.51-.51.48-1.05.9-1.62.96m3.96-10.18C15.08 4.46 13 3.6 11.18 3.32c-2.01-.3-3.53.14-4.27 1.25l-.04.05-3.42 4.76c-1.46 2.21.7 6.02 5.02 8.88 2.53 1.67 5.06 2.53 7.02 2.53 1.4 0 2.5-.44 3.1-1.34l3.45-4.8c0-.01.01-.01.01-.02 1.45-2.2-.71-6.02-5.02-8.88"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.275 8.398c-1.424-.947-3.113-1.518-3.691-.657-.56.856.623 2.194 2.046 3.141.935.616 1.984 1.07 2.755 1.07.407 0 .737-.126.931-.422.095-.14.189-.378.12-.718-.169-.84-1.227-1.799-2.161-2.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSushiSwapBold;
