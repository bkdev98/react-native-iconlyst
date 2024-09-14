import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarLoveBold = ({
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
      d="M13.49 11.495c-.35-.12-.74-.05-1.04.17-.27.2-.63.2-.9 0-.2-.15-.45-.23-.69-.23-.12 0-.24.02-.35.06-.72.23-.89 1.04-.69 1.69.3.95 1.47 1.86 2.18 2.33.71-.46 1.87-1.37 2.18-2.33.2-.65.03-1.46-.69-1.69m2.12 2.14s0 .01-.01.01c-.63 1.96-3.13 3.34-3.24 3.4a.77.77 0 0 1-.72 0c-.27-.15-2.64-1.5-3.25-3.41-.49-1.54.24-3.11 1.66-3.57.65-.21 1.35-.15 1.95.13.6-.29 1.3-.34 1.95-.13 1.42.46 2.15 2.03 1.66 3.57m3.76-8.31c-.68-.68-1.64-1.08-2.77-1.21v-.99a.749.749 0 1 0-1.5 0v2.58c0 .3.18.55.43.67a.65.65 0 0 1-.31.08c-.42 0-.75-.34-.75-.75v-1.46a.2.2 0 0 0-.2-.2H9.33v-.92a.749.749 0 1 0-1.5 0v2.58c0 .3.18.55.43.67a.65.65 0 0 1-.31.08c-.42 0-.75-.34-.75-.75V4.356a.194.194 0 0 0-.228-.193C4.712 4.583 3.4 6.218 3.4 8.725v8.15c0 2.97 1.8 4.75 4.8 4.75h7.61c3 0 4.79-1.75 4.79-4.69v-8.21c.01-1.41-.42-2.59-1.23-3.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarLoveBold;
