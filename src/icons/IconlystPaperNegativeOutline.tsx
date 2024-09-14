import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.974 2q.065 0 .126.011h.136c.204 0 .399.084.54.23l5.067 5.28a.75.75 0 0 1 .209.519v9.3a4.533 4.533 0 0 1-4.471 4.526H7.399A4.47 4.47 0 0 1 3 17.327V6.492c.057-2.481 2.105-4.48 4.568-4.48h6.278a1 1 0 0 1 .127-.01m-.75 1.511H7.571A3.086 3.086 0 0 0 4.5 6.51v10.83a2.97 2.97 0 0 0 2.912 3.028l.148-.001h8.012a3.03 3.03 0 0 0 2.979-3.025V8.983l-2.01.001a3.33 3.33 0 0 1-3.318-3.325zm.569 9.486a.75.75 0 0 1 0 1.5h-4.9a.75.75 0 0 1 0-1.5zm.93-8.645V5.66c0 1.004.818 1.822 1.822 1.825h1.183z"
    />
  </Svg>
);
export default IconlystPaperNegativeOutline;
