import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock3Bulk = ({
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
      d="M10.96 14.68h2.08c.057 0 .091-.03.11-.057a.12.12 0 0 0 .018-.115l-.647-1.942a.75.75 0 0 1 .267-.84c.347-.256.546-.649.546-1.077 0-.733-.599-1.329-1.335-1.329s-1.335.596-1.335 1.33c0 .426.2.82.548 1.076a.75.75 0 0 1 .267.84l-.646 1.94a.12.12 0 0 0 .018.117.13.13 0 0 0 .108.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.71 13.14a.3.3 0 0 0-.286.394l.167.5a1.63 1.63 0 0 1-1.551 2.146h-2.081a1.636 1.636 0 0 1-1.549-2.147l.166-.499a.3.3 0 0 0-.285-.394H2.8a.3.3 0 0 0-.3.3v2.53c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-2.53a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.915 11.64c.21 0 .355-.21.31-.415a2.7 2.7 0 0 1-.061-.575 2.835 2.835 0 0 1 5.67 0q0 .292-.061.575c-.044.205.102.415.311.415H21.2a.3.3 0 0 0 .3-.3V8.021c0-3.302-2.123-5.521-5.283-5.521H7.783C4.623 2.5 2.5 4.719 2.5 8.021v3.319a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareLock3Bulk;
