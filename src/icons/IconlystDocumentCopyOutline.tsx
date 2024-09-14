import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCopyOutline = ({
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
      d="M7.229 6.313h4.374c.636 0 1.245.259 1.685.717h.001l2.935 3.058c.419.436.652 1.016.652 1.62v6.32a3.7 3.7 0 0 1-3.582 3.722h-3.34c-1.346 0-2.658 0-2.813-.002a3.656 3.656 0 0 1-3.576-3.726V9.876A3.65 3.65 0 0 1 7.23 6.313m6.049 13.937a2.2 2.2 0 0 0 2.098-2.215v-6.328a.84.84 0 0 0-.233-.58L12.208 8.07a.84.84 0 0 0-.605-.257H7.224a2.15 2.15 0 0 0-2.159 2.09v8.143a2.156 2.156 0 0 0 2.109 2.203h6.104"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.29 2.25h4.376c.635 0 1.25.264 1.688.718l.003.003 2.925 3.055a2.3 2.3 0 0 1 .653 1.623v6.314a3.69 3.69 0 0 1-3.58 3.724h-1.23a.75.75 0 0 1 0-1.5h1.215a2.19 2.19 0 0 0 2.095-2.21V7.65a.8.8 0 0 0-.22-.57l-.012-.01-2.926-3.058-.001-.001a.86.86 0 0 0-.61-.26h-4.383A2.146 2.146 0 0 0 9.127 5.84v1.22a.75.75 0 1 1-1.5 0V5.81A3.646 3.646 0 0 1 11.29 2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.46 2.297a.75.75 0 0 1 .75.75v2.556c0 .835.675 1.51 1.508 1.513h2.421a.75.75 0 1 1 0 1.5h-2.424a3.01 3.01 0 0 1-3.004-3.013V3.047a.75.75 0 0 1 .75-.75M11.398 6.36a.75.75 0 0 1 .75.75v2.555c0 .835.675 1.511 1.508 1.514h2.42a.75.75 0 1 1 0 1.5h-2.4229999999999996a3.013 3.013 0 0 1-3.005-3.014V7.11a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentCopyOutline;
