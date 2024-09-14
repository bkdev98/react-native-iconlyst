import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoDashOutline = ({
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
      d="M9.52 3a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5H10.27A.75.75 0 0 1 9.52 3m0 18a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5H10.27a.75.75 0 0 1-.75-.75M3.25 9.268a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0v-3.962a.75.75 0 0 1 .75-.75M8.069 2.932a.75.75 0 0 1-.658.833c-1.885.22-3.122 1.51-3.39 3.434a.75.75 0 0 1-1.486-.207c.355-2.543 2.083-4.41 4.702-4.717a.75.75 0 0 1 .832.657M3.174 16.171a.75.75 0 0 1 .846.64c.269 1.92 1.503 3.203 3.391 3.424a.75.75 0 0 1-.174 1.49c-2.617-.306-4.346-2.162-4.702-4.707a.75.75 0 0 1 .639-.847M21.249 9.268a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0v-3.962a.75.75 0 0 1 .75-.75M21.283 16.172a.75.75 0 0 1 .64.847c-.356 2.542-2.074 4.4-4.693 4.707a.75.75 0 1 1-.175-1.49c1.886-.22 3.113-1.501 3.382-3.425a.75.75 0 0 1 .846-.639M16.398 2.932a.75.75 0 0 1 .832-.657c2.621.307 4.337 2.176 4.692 4.717a.75.75 0 0 1-1.485.207c-.27-1.926-1.498-3.214-3.382-3.434a.75.75 0 0 1-.657-.833M12.25 7.549a.75.75 0 0 1 .75.75v.048a.75.75 0 0 1-1.5 0v-.048a.75.75 0 0 1 .75-.75m0 3.093a.75.75 0 0 1 .75.75V15.7a.75.75 0 0 1-1.5 0v-4.31a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoDashOutline;
