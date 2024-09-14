import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarMenuBulk = ({
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
      d="M19.37 5.325c-.68-.68-1.64-1.08-2.77-1.21v-.99a.749.749 0 1 0-1.5 0v2.58c0 .3.18.55.43.67a.65.65 0 0 1-.31.08c-.42 0-.75-.34-.75-.75v-1.46a.2.2 0 0 0-.2-.2H9.33v-.92a.749.749 0 1 0-1.5 0v2.58c0 .3.18.55.43.67a.65.65 0 0 1-.31.08c-.42 0-.75-.34-.75-.75V4.356a.194.194 0 0 0-.228-.193C4.712 4.583 3.4 6.218 3.4 8.725v8.15c0 2.97 1.8 4.75 4.8 4.75h7.61c3 0 4.79-1.75 4.79-4.69v-8.21c.01-1.41-.42-2.59-1.23-3.4"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.641 11.818h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5m0 4.821h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5m-6.999-4.82H8.36a.75.75 0 0 1 0-1.5h.282a.75.75 0 0 1 0 1.5m0 4.82H8.36a.75.75 0 0 1 0-1.5h.282a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarMenuBulk;