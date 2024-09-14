import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.008 8.388v6.855a2.93 2.93 0 0 1-1.367 2.477l-5.116 3.224a4.36 4.36 0 0 1-5.496-.697c-1.972-2.09-1.418-5.484 1.117-6.838l1.869-.998a.09.09 0 0 0 .047-.08V8.389"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.006 11.945a4.778 4.778 0 0 0-3.995 7.403M17.291 3.615H9.474c-1.052 0-1.905.623-1.905 1.654v1.355c0 1.03.852 1.654 1.904 1.654h7.817c1.052 0 1.905-.624 1.905-1.654V5.269c0-1.03-.852-1.654-1.904-1.654"
    />
  </Svg>
);
export default IconlystSockLight;
