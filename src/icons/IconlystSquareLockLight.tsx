import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLockLight = ({
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
      d="M7.782 3.967h8.435c2.948 0 4.783 2.08 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.967 3 19.886 3 16.94V8.993c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.237 13.295c.515-.379.852-.984.852-1.673a2.085 2.085 0 0 0-4.171 0c0 .69.338 1.294.853 1.673l-.646 1.943a.884.884 0 0 0 .838 1.163h2.082a.884.884 0 0 0 .838-1.163z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLockLight;
