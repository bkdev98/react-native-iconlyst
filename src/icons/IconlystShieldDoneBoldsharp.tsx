import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.528 14.245-2.952-2.957 1.062-1.06 1.891 1.895 3.897-3.9 1.061 1.06zM3.882 3.093v9.55c0 6.86 8.142 9.404 8.224 9.429l.145.044.145-.044c.082-.025 8.222-2.57 8.222-9.43v-9.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldDoneBoldsharp;
