import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditBroken = ({
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
      d="M11.924 17.596H8.032c-2.948 0-4.782-2.08-4.782-5.026V8.515c0-2.945 1.843-5.027 4.782-5.027h.753M21.25 10.753V8.515c0-2.945-1.835-5.027-4.783-5.027h-4.218M17.76 19.567a1.94 1.94 0 0 1-1.128.621l-.81.135a.907.907 0 0 1-1.053-.992l.091-.836c.044-.404.212-.783.483-1.086l3.53-3.852a1.11 1.11 0 0 1 1.572-.062l.745.69a1.11 1.11 0 0 1 .06 1.572l-1.745 1.905M18.025 14.469l2.291 2.292M12.25 10.498v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M16.154 10.498v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.344 10.498v-.064m-.26.05a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordEditBroken;
