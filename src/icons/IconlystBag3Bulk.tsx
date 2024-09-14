import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M15.52 4.61c-.1-.01-.2-.01-.31-.01H8.79c-.11 0-.21 0-.31.01-2.67.13-4.51 1.99-4.51 4.61v7.91c0 2.76 1.94 4.62 4.82 4.62h6.42c2.88 0 4.82-1.86 4.82-4.62V9.22c0-2.62-1.84-4.48-4.51-4.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.52 4.61a2.485 2.485 0 0 0-2.49-2.36h-2.06c-1.33 0-2.42 1.04-2.49 2.36.1-.01.2-.01.31-.01h1.2c.07-.48.49-.85.98-.85h2.06c.5 0 .91.37.98.85h1.2c.11 0 .21 0 .31.01M7.71 6.24v13.89q.495.12 1.08.12h.42V6.1h-.42c-.39 0-.75.05-1.08.14M15.21 6.1h-.42v14.15h.42q.585 0 1.08-.12V6.24a4 4 0 0 0-1.08-.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Bulk;
