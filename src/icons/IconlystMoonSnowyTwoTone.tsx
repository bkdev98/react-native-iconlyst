import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSnowyTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.643 7.107a4.255 4.255 0 0 1 3.883-3.823c-1.26 3.403 1.26 5.896 4.589 4.585a4.255 4.255 0 0 1-3.709 3.875"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.85 5.076-.028-.008M16.943 18.291a3.68 3.68 0 0 0 2.165-3.353c0-2.307-1.629-3.662-3.646-3.68 0-1.45-1.137-4.352-4.35-4.352-3.214 0-4.352 2.902-4.352 4.352-2.017.018-3.646 1.373-3.646 3.68 0 1.492.888 2.777 2.165 3.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.111 18.093 8.75 19.404m2.361-1.311 2.36-1.312m-2.36 1.312 2.36 1.311m-2.36-1.311L8.75 16.78m2.361 1.312v2.623m0-2.623V15.47"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonSnowyTwoTone;
