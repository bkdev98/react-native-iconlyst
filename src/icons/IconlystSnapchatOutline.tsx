import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatOutline = ({
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
      d="M11.99 21.528c-1.06 0-1.88-.36-2.67-.72-.78-.35-1.58-.7-2.73-.8A1.97 1.97 0 0 1 5 18.888q-.59-1.21-2.3-1.97a.76.76 0 0 1-.45-.69c0-.3.17-.57.45-.69 3.36-1.47 3.66-3.06 3.67-7.21 0-2.99 2.24-5.54 5.08-5.83a5.643 5.643 0 0 1 6.18 5.61c0 4.15.14 5.89 3.67 7.43.33.14.51.49.43.84-.05.26-.23.46-.47.55-1.69.75-1.69.75-2.27 1.96-.31.63-.91 1.05-1.58 1.12-1.17.09-1.97.45-2.74.8-.79.35-1.61.72-2.67.72zm-7.31-5.31c.77.44 1.12.89 1.67 2.03.08.16.22.27.37.28 1.4.11 2.36.54 3.21.92.74.33 1.32.59 2.06.59s1.32-.26 2.06-.59c.85-.38 1.81-.81 3.22-.92.14-.01.29-.12.36-.28.55-1.13.9-1.59 1.67-2.03-3.02-1.83-3.18-4.27-3.18-8.1 0-1.16-.49-2.27-1.35-3.05-.87-.8-2.01-1.17-3.19-1.06-2.08.21-3.72 2.11-3.72 4.33 0 3.6-.18 6.05-3.18 7.87z"
    />
    <Path
      fill={props.color}
      d="M6.91 12.518a.74.74 0 0 1-.58-.28c-.96-1.19-1.8-1.97-2.65-2.45a.74.74 0 0 1-.28-1.02.74.74 0 0 1 1.02-.28c1.02.58 2 1.47 3.08 2.81.26.32.21.79-.11 1.05-.14.11-.31.17-.47.17zM17.07 12.517a.7.7 0 0 1-.47-.17.746.746 0 0 1-.11-1.05c1.08-1.34 2.06-2.23 3.08-2.81a.75.75 0 0 1 1.02.28c.2.36.08.82-.28 1.02-.85.48-1.69 1.26-2.65 2.45a.77.77 0 0 1-.58.28z"
    />
  </Svg>
);
export default IconlystSnapchatOutline;