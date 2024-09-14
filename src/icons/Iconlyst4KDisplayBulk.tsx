import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayBulk = ({
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
      d="M16.971 3.031H7.028A4.534 4.534 0 0 0 2.5 7.561v5.451a4.534 4.534 0 0 0 4.528 4.53h9.943a4.535 4.535 0 0 0 4.529-4.53v-5.45a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.579 12.394h.208a.75.75 0 0 0 0-1.5h-.208V7.805a.749.749 0 0 0-1.36-.438l-2.758 3.84a.75.75 0 0 0 .609 1.187h2.009v.38a.75.75 0 0 0 1.5 0zm-1.5-1.499v-.76l-.547.76z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.674 11.87a.75.75 0 0 1-.965 1.148l-1.912-1.604v1.2a.75.75 0 0 1-1.5 0V7.965a.75.75 0 0 1 1.5 0v1.19l1.912-1.604a.75.75 0 1 1 .965 1.148l-1.89 1.585zM7.504 19.466h8.99a.75.75 0 0 1 0 1.5h-8.99a.75.75 0 0 1 0-1.5"
    />
  </Svg>
);
export default Iconlyst4KDisplayBulk;
