import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchOutline = ({
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
      d="M7.911 4.676c-.4 0-.774.198-1 .527l-2.95 4.324a1.21 1.21 0 0 0 .104 1.496l7.306 8.026a.85.85 0 0 0 1.257 0l7.307-8.027a1.21 1.21 0 0 0 .105-1.496l-2.942-4.32a1.21 1.21 0 0 0-1-.53zm-2.238-.318A2.71 2.71 0 0 1 7.91 3.176h8.186a2.71 2.71 0 0 1 2.24 1.185l2.943 4.32a2.71 2.71 0 0 1-.236 3.35l-7.307 8.028a2.35 2.35 0 0 1-3.476 0l-7.305-8.027a2.71 2.71 0 0 1-.234-3.351z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSketchOutline;
