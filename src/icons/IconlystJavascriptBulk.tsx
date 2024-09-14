import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJavascriptBulk = ({
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
      d="M18.855 5.88 13.877 3.01a3.71 3.71 0 0 0-3.751-.002L5.145 5.88A3.75 3.75 0 0 0 3.27 9.123v5.75c0 1.34.717 2.586 1.87 3.252l4.988 2.883a3.8 3.8 0 0 0 1.87.49c.647 0 1.295-.164 1.875-.492l4.98-2.88a3.76 3.76 0 0 0 1.876-3.243v-5.76a3.76 3.76 0 0 0-1.875-3.244"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.115 15.92h1.073a2.31 2.31 0 0 0 2.335-2.34 2.335 2.335 0 0 0-2.335-2.33h-1.073c-.405 0-.835-.29-.835-.83 0-.413.312-.84.835-.84h1.073c.35 0 .686.278.797.66a.75.75 0 1 0 1.44-.418c-.297-1.026-1.217-1.742-2.237-1.742h-1.073a2.313 2.313 0 0 0-2.335 2.34 2.31 2.31 0 0 0 2.335 2.33h1.073c.522 0 .835.422.835.83 0 .546-.43.84-.835.84h-1.073a.81.81 0 0 1-.806-.62.75.75 0 1 0-1.452.381 2.305 2.305 0 0 0 2.258 1.74M8.225 15.912a2.383 2.383 0 0 0 2.38-2.38v-4.65a.75.75 0 0 0-1.5 0v4.65a.88.88 0 0 1-.88.88h-.998a.75.75 0 0 0 0 1.5z"
    />
  </Svg>
);
export default IconlystJavascriptBulk;
