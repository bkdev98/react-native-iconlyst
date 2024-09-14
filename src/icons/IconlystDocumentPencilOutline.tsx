import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPencilOutline = ({
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
      d="M7.529 2.25h5.65c.76 0 1.49.31 2.019.86l3.792 3.95c.5.521.78 1.217.78 1.938v1.3a.75.75 0 0 1-1.5 0v-1.3a1.3 1.3 0 0 0-.362-.9L14.116 4.15a1.3 1.3 0 0 0-.937-.399H7.524a2.996 2.996 0 0 0-3.007 2.916V17.18a3.004 3.004 0 0 0 2.928 3.069l3.994.001v1.5l-4.002-.001H7.42a4.504 4.504 0 0 1-4.403-4.593V6.639A4.496 4.496 0 0 1 7.529 2.25M11.439 21v.75a.75.75 0 1 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.662 2.313a.75.75 0 0 1 .75.75v2.892a1.81 1.81 0 0 0 1.805 1.81h2.738a.75.75 0 0 1 0 1.5h-2.74a3.31 3.31 0 0 1-3.303-3.31V3.063a.75.75 0 0 1 .75-.75M7.316 9.98a.75.75 0 0 1 .75-.75h2.469a.75.75 0 0 1 0 1.5H8.066a.75.75 0 0 1-.75-.75m.001 4.129a.75.75 0 0 1 .75-.75h4.729a.75.75 0 0 1 0 1.5H8.067a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.07 21.7a1.52 1.52 0 0 1-1.488-1.224l-.134-.67a2.67 2.67 0 0 1 .306-1.857l2.429-4.206a1.807 1.807 0 0 1 2.467-.66l.779.45A1.81 1.81 0 0 1 21.095 16l-2.432 4.2c-.325.561-.842.985-1.455 1.193l-.651.221a1.5 1.5 0 0 1-.487.086m2.678-7.36a.298.298 0 0 0-.265.152l-2.43 4.208a1.2 1.2 0 0 0-.135.814l.134.672.675-.207c.268-.091.494-.277.637-.523l2.427-4.2a.31.31 0 0 0-.112-.419l-.78-.45a.3.3 0 0 0-.151-.047"
    />
  </Svg>
);
export default IconlystDocumentPencilOutline;
