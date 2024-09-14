import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.054 3.324h-.81a3.62 3.62 0 0 0-3.618 3.62v7.52M5.627 17.707a3.62 3.62 0 0 0 3.617 3.617h5.516a3.617 3.617 0 0 0 3.617-3.618v-4.464M18.85 7.3c0 2.512-3.011 3.423-3.011 3.423s-3.01-.91-3.01-3.424-.11-2.709.132-2.95c.241-.243 2.483-1.025 2.878-1.025s2.878 1.024 2.878 1.024"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.59v-.063m-.259.05a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPhoneShieldBroken;
