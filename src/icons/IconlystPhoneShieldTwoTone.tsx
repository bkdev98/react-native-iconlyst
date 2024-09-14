import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneShieldTwoTone = ({
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
      d="M10.304 3.283h-.81a3.62 3.62 0 0 0-3.618 3.62l.001 10.762a3.62 3.62 0 0 0 3.617 3.617h5.516a3.617 3.617 0 0 0 3.617-3.618V13.2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.089 10.682s3.01-.91 3.01-3.424.109-2.707-.132-2.95c-.242-.244-2.483-1.025-2.878-1.025s-2.637.782-2.878 1.024-.132.438-.132 2.951 3.01 3.424 3.01 3.424"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 17.55v-.064zm-.259-.014a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPhoneShieldTwoTone;
