import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkCheckBold = ({
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
      d="M5.65 21.5a1.38 1.38 0 0 1-1.382-1.384V6.415c0-2.488 1.74-3.915 4.772-3.915h5.917c3.076 0 4.77 1.451 4.77 4.086l.005 13.526a1.386 1.386 0 0 1-2.065 1.204l-5.642-3.187-5.697 3.194a1.4 1.4 0 0 1-.678.177m4.784-8.306c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l4.137-4.134A.75.75 0 1 0 14.57 8l-3.606 3.604-1.538-1.537a.75.75 0 0 0-1.06 1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkCheckBold;
