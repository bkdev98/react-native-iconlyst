import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeBatteryBold = ({
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
      d="M9.905 4.8c0-.634.094-1.05 1.35-1.05h1.7c1.247 0 1.35.496 1.35 1.05v.221c-.15-.007-.294-.027-.45-.021h-3.3c-.227 0-.436.03-.65.052zm3.29 16.008a.2.2 0 0 0-.11-.166 5.4 5.4 0 0 1-1.108-.749c-1.547-1.385-1.99-3.218-1.99-5.193 0-1.224.662-2.256 1.648-2.795a.22.22 0 0 0 .1-.12 2.49 2.49 0 0 1 3.952-1.106 2.5 2.5 0 0 1 1.6-.579c.272 0 .531.047.775.129.14.047.293-.05.293-.198V9.6c0-1.477-.45-2.69-1.3-3.508a3.8 3.8 0 0 0-1.25-.774V4.8c0-.767-.277-2.55-2.85-2.55h-1.7c-2.355 0-2.85 1.387-2.85 2.55v.635c-1.542.682-2.45 2.143-2.45 4.165v7.301c0 2.879 1.682 4.599 4.5 4.599h2.57a.2.2 0 0 0 .2-.212z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.555 13.59-.002-.001a1.2 1.2 0 0 0-.466-.09h-.05v-.9a.75.75 0 0 0-1.5 0v.9h-1.7v-.9a.75.75 0 0 0-1.5 0v.9h-.15q-.245 0-.467.09a1.19 1.19 0 0 0-.733 1.116l.01 1.01a3.734 3.734 0 0 0 2.94 3.517V21a.75.75 0 0 0 1.5 0v-1.79a3.74 3.74 0 0 0 2.84-3.505l.01-1.005a1.19 1.19 0 0 0-.732-1.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeBatteryBold;
