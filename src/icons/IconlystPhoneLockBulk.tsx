import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLockBulk = ({
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
      d="M16.809 13.114h-3.102a4.043 4.043 0 0 1-4.04-4.039v-1.74a4 4 0 0 1 1.228-2.882.32.32 0 0 0 .093-.178c.07-.41.192-.804.365-1.168.102-.215-.046-.482-.284-.482H9.017A4.124 4.124 0 0 0 4.9 6.745v10.76a4.123 4.123 0 0 0 4.117 4.12h5.516a4.124 4.124 0 0 0 4.118-4.12v-4.363c0-.225-.24-.371-.45-.29a3.9 3.9 0 0 1-1.393.262"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.86 4.945v.367a2.29 2.29 0 0 1 1.24 2.023v1.74a2.29 2.29 0 0 1-2.29 2.289h-3.104a2.293 2.293 0 0 1-2.29-2.289v-1.74c0-.883.507-1.641 1.241-2.023v-.368a2.616 2.616 0 0 1 2.572-2.569h.027a2.61 2.61 0 0 1 2.604 2.57m-1.05 4.919a.79.79 0 0 0 .79-.789v-1.74a.79.79 0 0 0-.79-.79h-3.104a.79.79 0 0 0-.79.79v1.74a.79.79 0 0 0 .79.789zm-.45-4.909c-.008-.598-.513-1.122-1.116-1.08a1.103 1.103 0 0 0-1.087 1.081v.089h2.203z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.776 18.385a1.01 1.01 0 0 1-1.012-1.01 1.012 1.012 0 0 1 2.022 0c0 .557-.453 1.01-1.01 1.01"
    />
  </Svg>
);
export default IconlystPhoneLockBulk;
