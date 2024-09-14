import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHeartOutline = ({
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
      d="M11.798 11.567a1.28 1.28 0 0 0-1.16-.195c-.683.22-1.043 1.006-.772 1.867.165.47.434.898.787 1.25a11 11 0 0 0 1.596 1.286q.857-.567 1.596-1.284c.353-.354.622-.78.787-1.252.27-.858-.09-1.645-.775-1.867a1.28 1.28 0 0 0-1.158.196.75.75 0 0 1-.901 0m.451-1.475a2.78 2.78 0 0 0-2.07-.147c-1.698.547-2.189 2.353-1.739 3.76l.006.017c.24.69.634 1.318 1.151 1.833l.006.006c.66.641 1.388 1.209 2.172 1.69l.09.055a.75.75 0 0 0 .781-.007l.079-.048a12.6 12.6 0 0 0 2.169-1.688l.007-.007a4.8 4.8 0 0 0 1.151-1.834l.006-.018c.45-1.408-.045-3.213-1.741-3.76h-.002a2.78 2.78 0 0 0-2.066.148"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.466 21.75H7.035a4.077 4.077 0 0 1-4.072-4.073V10.5a3.7 3.7 0 0 1 1.369-2.88l5.573-4.54a3.73 3.73 0 0 1 4.69 0l5.574 4.54a3.7 3.7 0 0 1 1.369 2.88v7.174a4.077 4.077 0 0 1-4.072 4.076m-5.216-18c-.51 0-1.005.176-1.4.5L5.276 8.79a2.2 2.2 0 0 0-.816 1.717v7.173a2.575 2.575 0 0 0 2.572 2.572h10.43a2.575 2.575 0 0 0 2.573-2.572V10.5a2.2 2.2 0 0 0-.816-1.717l-5.57-4.537a2.2 2.2 0 0 0-1.4-.495z"
    />
  </Svg>
);
export default IconlystHomeHeartOutline;
