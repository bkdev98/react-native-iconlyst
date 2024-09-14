import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperPlusOutline = ({
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
      d="M13.975 2q.064 0 .126.011h.136c.204 0 .399.084.54.23l5.067 5.28a.75.75 0 0 1 .208.519v9.3a4.533 4.533 0 0 1-4.471 4.526H7.4a4.473 4.473 0 0 1-4.4-4.54V6.492c.058-2.481 2.107-4.48 4.57-4.48h6.278a1 1 0 0 1 .127-.01m-.75 1.511H7.572A3.086 3.086 0 0 0 4.5 6.51v10.83a2.97 2.97 0 0 0 2.913 3.028l.147-.001h8.012a3.03 3.03 0 0 0 2.979-3.025V8.983l-2.008.001a3.33 3.33 0 0 1-3.32-3.325zm-1.88 6.203a.75.75 0 0 1 .75.75v1.7h1.699a.75.75 0 0 1 0 1.5h-1.7v1.7a.75.75 0 0 1-1.5 0v-1.7h-1.7a.75.75 0 0 1 0-1.5h1.7v-1.7a.75.75 0 0 1 .75-.75m3.38-5.362V5.66c0 1.004.816 1.822 1.82 1.825h1.183z"
    />
  </Svg>
);
export default IconlystPaperPlusOutline;
