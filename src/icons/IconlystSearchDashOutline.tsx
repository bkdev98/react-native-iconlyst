import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDashOutline = ({
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
      d="M9.516 3a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5h-3.963a.75.75 0 0 1-.75-.75m-1.45-.068a.75.75 0 0 1-.658.832c-1.885.22-3.121 1.511-3.39 3.435a.75.75 0 0 1-1.486-.208c.356-2.542 2.083-4.41 4.702-4.717a.75.75 0 0 1 .832.658m8.33 0a.75.75 0 0 1 .833-.658c2.621.307 4.337 2.177 4.692 4.717a.75.75 0 0 1-1.485.208c-.27-1.926-1.498-3.215-3.382-3.435a.75.75 0 0 1-.657-.832M11.95 9.118a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m3.24 4.847a4 4 0 1 0-1.093 1.029l1.17 1.168a.75.75 0 0 0 1.06-1.062zM3.25 9.268a.75.75 0 0 1 .75.75v3.963a.75.75 0 0 1-1.5 0v-3.963a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v3.963a.75.75 0 0 1-1.5 0v-3.963a.75.75 0 0 1 .75-.75M3.17 16.172a.75.75 0 0 1 .847.638c.27 1.922 1.504 3.205 3.391 3.425a.75.75 0 1 1-.174 1.49c-2.617-.305-4.346-2.163-4.702-4.707a.75.75 0 0 1 .639-.846m18.112 0a.75.75 0 0 1 .64.846c-.357 2.542-2.074 4.4-4.693 4.707a.75.75 0 1 1-.175-1.49c1.886-.22 3.113-1.5 3.382-3.425a.75.75 0 0 1 .846-.638M9.516 21a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5h-3.963a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDashOutline;
