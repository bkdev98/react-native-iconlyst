import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.745 8.608h8.142v-1.5h-8.142zM6.88 10.909c1.726 0 3.13-1.396 3.13-3.111S8.606 4.687 6.88 4.687s-3.13 1.395-3.13 3.11c0 1.716 1.404 3.112 3.13 3.112M4.613 18.22h8.142v-1.5H4.613zM17.62 14.298c-1.726 0-3.13 1.396-3.13 3.111s1.404 3.112 3.13 3.112 3.13-1.396 3.13-3.112c0-1.715-1.404-3.11-3.13-3.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterBoldsharp;
