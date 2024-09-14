import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareSongOutline = ({
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
      d="M11.601 21.75H8.032c-3.308 0-5.532-2.321-5.532-5.776V8.027c0-3.455 2.224-5.777 5.532-5.777h8.435C19.776 2.25 22 4.572 22 8.027v3.082a.75.75 0 1 1-1.5 0V8.027c0-2.6-1.583-4.277-4.033-4.277H8.032C5.583 3.75 4 5.429 4 8.027v7.947c0 2.6 1.583 4.276 4.032 4.276h3.569a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M9.585 16.31q-.178 0-.354-.02a2.908 2.908 0 1 1 .354.02m-.006-4.319a1.413 1.413 0 0 0-1.358 1.79 1.41 1.41 0 0 0 2.758-.212 1.41 1.41 0 0 0-1.4-1.578M21.249 21.75a.75.75 0 0 1-.53-.22l-1.127-1.125a3.644 3.644 0 1 1 1.091-1.029l1.094 1.093a.749.749 0 0 1-.53 1.28zm-3.555-6.595a2.142 2.142 0 1 0 .002 4.286 2.142 2.142 0 0 0-.002-4.287z"
    />
    <Path
      fill={props.color}
      d="M11.723 14.41a.747.747 0 0 1-.745-.84l.771-6.437a.75.75 0 0 1 .7-.658.735.735 0 0 1 .776.565 2.26 2.26 0 0 0 1.352 1.474.75.75 0 1 1-.473 1.423 3.4 3.4 0 0 1-1.1-.615l-.534 4.426a.75.75 0 0 1-.747.661"
    />
  </Svg>
);
export default IconlystSearchSquareSongOutline;
