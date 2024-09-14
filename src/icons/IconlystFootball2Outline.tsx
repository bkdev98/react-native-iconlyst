import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFootball2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.686 6.028a.75.75 0 0 1 .98.406l1.378 3.332a.75.75 0 0 1-.19.843l-3.058 2.765a.75.75 0 0 1-1.006-1.112l2.666-2.411L4.28 7.008a.75.75 0 0 1 .406-.98M8.626 3.084a.75.75 0 0 1 1.04-.208l2.584 1.723 2.584-1.723a.75.75 0 1 1 .832 1.248l-3 2a.75.75 0 0 1-.832 0l-3-2a.75.75 0 0 1-.208-1.04M4.097 16.923a.75.75 0 0 1 .792-.706l4.116.238a.75.75 0 0 1 .677.537l1.015 3.46a.75.75 0 0 1-1.44.422l-.866-2.952-3.589-.207a.75.75 0 0 1-.705-.792M20.517 16.923a.75.75 0 0 1-.706.792l-3.588.207-.866 2.952a.75.75 0 1 1-1.44-.422l1.015-3.46a.75.75 0 0 1 .677-.537l4.116-.238a.75.75 0 0 1 .792.706M19.837 6.028a.75.75 0 0 1 .406.98L19.067 9.85l2.666 2.411a.75.75 0 1 1-1.006 1.112l-3.058-2.765a.75.75 0 0 1-.19-.843l1.378-3.332a.75.75 0 0 1 .98-.406M11.834 8.376a.75.75 0 0 1 .832 0l3 2a.75.75 0 0 1 .312.806l-1 4a.75.75 0 0 1-.728.568h-4a.75.75 0 0 1-.728-.568l-1-4a.75.75 0 0 1 .312-.806zm-1.728 2.955.73 2.919h2.829l.73-2.92-2.145-1.429z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFootball2Outline;
