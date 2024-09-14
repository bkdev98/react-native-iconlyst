import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldLight = ({
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
      d="M9.804 3.621h-.81a3.62 3.62 0 0 0-3.618 3.62l.001 10.762a3.62 3.62 0 0 0 3.617 3.617h5.516a3.617 3.617 0 0 0 3.617-3.618v-4.464"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.589 11.02s3.01-.91 3.01-3.424.109-2.707-.132-2.95c-.242-.244-2.483-1.025-2.878-1.025s-2.637.782-2.878 1.024-.132.438-.132 2.951 3.01 3.424 3.01 3.424"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.75 17.887v-.063zm-.259-.013a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPhoneShieldLight;
