import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVueOutline = ({
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
      d="M3.971 5.313a.221.221 0 0 0-.191.331l7.188 12.45-.65.375.65-.375a1.192 1.192 0 0 0 2.065 0l.649.375-.65-.375 7.188-12.45.65.375-.65-.375a.22.22 0 0 0 0-.221l.65-.375-.65.375a.22.22 0 0 0-.191-.11h-4.832a.75.75 0 0 0-.65.375L12.65 8.974a.75.75 0 0 1-1.298 0L9.453 5.688a.75.75 0 0 0-.65-.375zm-1.49-.64c.307-.532.875-.86 1.49-.86h4.832a2.25 2.25 0 0 1 1.949 1.124L12 7.1l1.248-2.161a2.25 2.25 0 0 1 1.949-1.125h4.832a1.721 1.721 0 0 1 1.49 2.581l-7.187 12.45a2.692 2.692 0 0 1-4.664 0L2.481 6.394a1.72 1.72 0 0 1 0-1.721"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.43 3.913a.75.75 0 0 1 .275 1.025L12.65 15.425a.75.75 0 0 1-1.3-.75l6.056-10.487a.75.75 0 0 1 1.024-.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.57 3.913a.75.75 0 0 1 1.025.275l6.055 10.487a.75.75 0 1 1-1.3.75L5.297 4.938a.75.75 0 0 1 .274-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVueOutline;
