import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotificationBold = ({
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
      d="M13.095 5.288c0-.905.216-1.759.592-2.52h-6.1c-3.118 0-5.213 2.192-5.213 5.454v7.845c0 3.262 2.095 5.454 5.213 5.454h8.324c3.12 0 5.216-2.192 5.216-5.454V10.52a5.7 5.7 0 0 1-2.31.491 5.73 5.73 0 0 1-5.722-5.722"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.77 8.19a2.86 2.86 0 0 0 2.856-2.855 2.86 2.86 0 0 0-2.856-2.856 2.86 2.86 0 0 0-2.856 2.856A2.86 2.86 0 0 0 18.77 8.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewNotificationBold;
