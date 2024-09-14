import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeIllustratorBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.348 9.09c0 .415.371.78.785.78s.786-.365.786-.78c0-.413-.372-.79-.786-.79s-.785.377-.785.79M16.135 16.15a.75.75 0 0 0 .75-.75v-3.97a.75.75 0 0 0-1.5 0v3.97c0 .414.336.75.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.725 16.084a.75.75 0 0 1-.992-.376l-.787-1.747H8.828l-.762 1.74a.75.75 0 0 1-1.374-.601l2.976-6.8a.75.75 0 0 1 .683-.45c.343.017.567.172.688.443l3.062 6.8a.75.75 0 0 1-.376.99M11.27 12.46H9.484l.881-2.012z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeIllustratorBulk;
