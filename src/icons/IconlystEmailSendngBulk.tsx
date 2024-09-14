import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSendngBulk = ({
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
      d="M9.525 16.85h-4.3a.73.73 0 0 1-.661-.422c-.047-.097.053-.178.16-.178h4.301a.75.75 0 0 0 .75-.75c0-.037-.016-.069-.021-.104.3.098.521.371.521.704a.75.75 0 0 1-.75.75m7.8-13.45h-8.8c-2.9 0-5.1 2.4-5.1 5.5v2.85h-1.1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75c0-.037-.016-.069-.021-.104.3.098.521.371.521.704a.75.75 0 0 1-.75.75h-2.7a.2.2 0 0 0-.2.2v1.05c0 .948.218 1.855.599 2.65H2.625a.75.75 0 0 0 0 1.5h3.2a.75.75 0 0 0 .75-.75c0-.037-.016-.069-.021-.104.3.098.521.371.521.704a.75.75 0 0 1-.75.75c-.137 0-.184.171-.061.233.669.335 1.428.517 2.261.517h8.8c1.3 0 2.5-.5 3.5-1.4 1-1 1.6-2.5 1.6-4.1V8.9c-.1-3.2-2.2-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.625 9.7-4 3.2q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.5.2 1-.1 1.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailSendngBulk;
