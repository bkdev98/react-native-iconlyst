import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonClearOutline = ({
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
      d="M12.444 21.739c-5.17 0-9.38-4.21-9.38-9.38 0-4.17 2.79-7.88 6.8-9.02.29-.08.65.03.84.26.21.25.24.6.09.89-1.43 2.7-.92 6.1 1.25 8.27s5.57 2.68 8.27 1.24c.26-.14.65-.11.88.08.24.19.36.55.28.84-1.15 4.02-4.86 6.82-9.02 6.82zm-3.62-16.38c-2.57 1.34-4.26 4.03-4.26 7 0 4.35 3.54 7.88 7.88 7.88 2.97 0 5.67-1.7 7-4.27-2.94.87-6.24.08-8.47-2.15s-3.02-5.52-2.15-8.47z"
    />
    <Path
      fill={props.color}
      d="M14.595 7.77c-.29 0-.56-.17-.68-.43l-.53-1.13-1.13-.53a.753.753 0 0 1 0-1.36l1.13-.53.53-1.13c.25-.53 1.11-.53 1.36 0l.53 1.13 1.13.53a.753.753 0 0 1 0 1.36l-1.13.53-.53 1.13c-.12.26-.39.43-.68.43M14.335 5c.11.06.2.15.26.26.06-.11.15-.2.26-.26a.65.65 0 0 1-.26-.26.65.65 0 0 1-.26.26M18.904 13.119c-.29 0-.55-.17-.68-.43l-.69-1.46-1.46-.69a.753.753 0 0 1 0-1.36l1.46-.69.69-1.46a.753.753 0 0 1 1.36 0l.69 1.46 1.46.69a.753.753 0 0 1 0 1.36l-1.46.69-.69 1.46c-.12.26-.39.43-.68.43m-.75-3.26.26.12c.16.07.29.2.36.36l.12.26.12-.26c.07-.16.2-.29.36-.36l.26-.12-.26-.12a.7.7 0 0 1-.36-.36l-.12-.26-.12.26c-.07.16-.2.29-.36.36z"
    />
  </Svg>
);
export default IconlystMoonClearOutline;
