import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesQuestionBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.413 13.526-.128.072c-.572.322-.774.483-.77.747a.75.75 0 0 1-.74.76h-.01a.75.75 0 0 1-.75-.74c-.018-1.201.955-1.748 1.535-2.074l.128-.073c.511-.282.756-.653.756-1.14a1.45 1.45 0 0 0-1.445-1.452c-.809 0-1.444.637-1.444 1.452a.75.75 0 0 1-1.5 0 2.95 2.95 0 0 1 2.944-2.952 2.95 2.95 0 0 1 2.945 2.952c0 1.037-.54 1.906-1.52 2.448m-.897 3.084a.75.75 0 1 1-1.5 0c0-.414.335-.753.75-.753.414 0 .75.333.75.747zm6.957-9.751a9.53 9.53 0 0 0-6.918-3.63 9.49 9.49 0 0 0-7.278 2.775c-2.805 2.814-3.57 7.136-1.913 10.73.04.1.162.405.99 1.848a.47.47 0 0 1-.024.509c-.222.314-.503.715-.722 1.045a1.38 1.38 0 0 0-.068 1.418c.238.445.7.72 1.204.72h.617c2.371 0 5.786-.002 6.603 0h.033a9.5 9.5 0 0 0 7.272-3.396c2.898-3.437 2.984-8.492.204-12.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesQuestionBold;
