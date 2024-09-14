import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect2Bold = ({
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
      d="M7.65 4.746h1.5a.749.749 0 1 1 0 1.5h-1.5a.749.749 0 1 1 0-1.5m-2.36 3.69c.19-.1.37-.18.57-.25.32-.11.65-.19 1-.21h.01c.09-.01.19-.01.28-.01h9.7c.09 0 .19 0 .28.01h.01c.34.03.68.1.99.22h.01q.3.09.57.24c.93-.61 1.54-1.66 1.54-2.85 0-1.87-1.53-3.4-3.4-3.4h-9.7a3.41 3.41 0 0 0-3.4 3.4c0 1.19.61 2.24 1.54 2.85M12.9 19.465c0 .48-.37.85-.85.85s-.85-.37-.85-.85.37-.85.85-.85.85.37.85.85m-3.75-6.25h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75m9.44-3.67c-.51-.31-1.1-.48-1.74-.48h-9.7c-.64 0-1.23.17-1.74.48a3.39 3.39 0 0 0-.26 5.66c.56.42 1.25.66 2 .66h4.15v1.37c-.71.23-1.25.77-1.48 1.48H5.85c-.41 0-.75.34-.75.75s.34.75.75.75h3.97c.3.94 1.17 1.6 2.23 1.6s1.93-.66 2.23-1.6h3.97c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.97c-.23-.71-.77-1.25-1.48-1.48v-1.37h4.05c.75 0 1.44-.24 2-.66a3.39 3.39 0 0 0-.26-5.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnect2Bold;
