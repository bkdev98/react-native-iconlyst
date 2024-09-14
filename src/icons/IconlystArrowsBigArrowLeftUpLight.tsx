import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowLeftUpLight = ({
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
      d="m4.508 5.503.748-.044zm.542 9.214-.75.044zm.802.305.53.53zm2.588-2.588.53-.53a.75.75 0 0 0-1.06 0zm3.966 3.966-.53.53zm1.331 0-.53-.53zm2.663-2.663.53.53zm0-1.331-.53.53zM12.435 8.44l-.53-.53a.75.75 0 0 0 0 1.06zm2.587-2.588-.53-.53zm-.305-.803-.044.75zm-9.214-.542.044-.748zm-1.744 1.04L4.3 14.76l1.497-.088-.542-9.214zm2.624 10.005 2.587-2.587-1.06-1.061-2.588 2.588zm1.527-2.587 3.966 3.966 1.06-1.061-3.966-3.966zm6.358 3.966 2.663-2.663-1.061-1.061-2.663 2.663zm2.663-5.055-3.966-3.967-1.06 1.061 3.965 3.966zM12.965 8.97l2.587-2.587-1.06-1.061-2.588 2.587zM14.76 4.3 5.547 3.76l-.088 1.497 9.214.542zm.791 2.083c.745-.745.26-2.02-.791-2.082l-.088 1.497a.28.28 0 0 1-.181-.476zm1.379 7.885c.66-.661.66-1.732 0-2.393l-1.061 1.061a.19.19 0 0 1 0 .271zm-5.055 2.663c.66.66 1.731.66 2.392 0l-1.061-1.061a.19.19 0 0 1-.27 0zM4.3 14.76c.062 1.051 1.337 1.536 2.082.791l-1.06-1.06a.28.28 0 0 1 .475.18zm.955-9.302a.19.19 0 0 1 .203-.203l.088-1.497a1.692 1.692 0 0 0-1.788 1.788z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15.525 19.494 3.97-3.97"
    />
  </Svg>
);
export default IconlystArrowsBigArrowLeftUpLight;
