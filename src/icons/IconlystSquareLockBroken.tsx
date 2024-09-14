import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLockBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.466 21.008c2.949 0 4.784-2.081 4.784-5.026V8.034c0-2.945-1.835-5.026-4.783-5.026H8.032c-2.939 0-4.782 2.08-4.782 5.026v7.948c0 2.945 1.834 5.026 4.782 5.026h4.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.213 15.442h2.082a.884.884 0 0 0 .838-1.163l-.646-1.943c.515-.379.852-.984.852-1.673a2.085 2.085 0 0 0-4.171 0c0 .69.338 1.294.853 1.673l-.323.972"
    />
  </Svg>
);
export default IconlystSquareLockBroken;
