import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyHeartBulk = ({
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
      d="M19.554 9.41c-.25 0-.5-.07-.72-.19-.29-.15-2.79-1.58-3.45-3.68a3.7 3.7 0 0 1-.054-2.147c.045-.159-.03-.332-.186-.386a9.3 9.3 0 0 0-3.05-.507c-5.23 0-9.5 4.26-9.5 9.5s4.27 9.5 9.5 9.5c5.24 0 9.5-4.26 9.5-9.5a9.3 9.3 0 0 0-.45-2.878c-.06-.188-.287-.255-.451-.144-.345.232-.724.432-1.139.432"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.38 10.502a.75.75 0 0 1-1.5 0v-.505a.75.75 0 0 1 1.5 0zM15.573 14.743c-.868 1.128-2.133 1.775-3.474 1.775-1.34 0-2.607-.647-3.475-1.775a.751.751 0 0 1 1.19-.914c.581.756 1.414 1.19 2.285 1.19s1.704-.434 2.285-1.19a.75.75 0 0 1 1.052-.138.75.75 0 0 1 .137 1.052M8.418 9.997a.75.75 0 0 1 1.5 0v.505a.75.75 0 0 1-1.5 0zM21.185 2.58c-.18-.05-.36-.08-.55-.08-.38 0-.76.12-1.08.36-.32-.24-.7-.36-1.09-.36-.18 0-.36.03-.54.08-.59.19-.98.64-1.14 1.17-.12.42-.11.89.03 1.33.5 1.6 2.74 2.83 2.74 2.83s.36-.2.83-.54c.69-.51 1.6-1.33 1.91-2.29.32-1.01-.05-2.16-1.11-2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyHeartBulk;
