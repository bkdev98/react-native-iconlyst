import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBulksharp = ({
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
      d="M3.882 3.093v9.55c0 6.86 8.142 9.404 8.224 9.429l.145.044.145-.044c.082-.025 8.222-2.57 8.222-9.43v-9.55z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m8.576 11.287 2.952 2.957 4.96-4.96-1.062-1.06-3.897 3.898-1.89-1.895z"
    />
  </Svg>
);
export default IconlystShieldDoneBulksharp;
