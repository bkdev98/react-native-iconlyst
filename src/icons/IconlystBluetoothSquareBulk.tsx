import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareBulk = ({
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
      d="M15.318 2.5H8.683C5.523 2.5 3.4 4.723 3.4 8.031v7.939c0 3.308 2.123 5.53 5.283 5.53h6.634c3.16 0 5.283-2.222 5.283-5.53V8.031c0-3.308-2.123-5.531-5.282-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.421 14.231a.75.75 0 0 0-.282-.586l-1.937-1.55 1.937-1.549a.75.75 0 0 0 .001-1.171l-2.67-2.139a.75.75 0 0 0-1.219.585v2.715L9.798 9.374a.75.75 0 0 0-.936 1.172l1.937 1.549-1.937 1.55a.751.751 0 0 0 .936 1.172l1.453-1.161v2.705a.75.75 0 0 0 1.218.586l2.67-2.13a.75.75 0 0 0 .282-.586m-1.95-4.271-.72.576V9.384zm-.002 4.27-.718.573v-1.147z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothSquareBulk;
