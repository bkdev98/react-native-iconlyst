import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrim2Bulk = ({
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
      d="M22.334 8v8c0 .12 0 .24-.01.35-.16 2.82-2.23 4.69-5.26 4.69h-8.46c-3.02 0-5.1-1.87-5.26-4.69-.01-.11-.01-.23-.01-.35V8c0-.12 0-.23.01-.35.16-2.83 2.23-4.69 5.26-4.69h8.46c3.04 0 5.1 1.86 5.26 4.69.01.12.01.23.01.35"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.644 14.848c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h2.68c.01-.11.01-.23.01-.35v-1.15zm-3.08 0h-2.19a.749.749 0 1 0 0 1.5h2.19c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75m-5.27 0h-2.19a.749.749 0 1 0 0 1.5h2.19c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75m-5.26 0h-2.7v1.15c0 .12 0 .24.01.35h2.69a.749.749 0 1 0 0-1.5M3.344 7.648h2.69a.749.749 0 1 1 0 1.5h-2.7zm18.98 0h-2.68c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h2.69v-1.15c0-.12 0-.23-.01-.35m-5.76 0h-2.19a.749.749 0 1 0 0 1.5h2.19c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75m-5.27 0h-2.19a.749.749 0 1 0 0 1.5h2.19c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCutTrim2Bulk;
