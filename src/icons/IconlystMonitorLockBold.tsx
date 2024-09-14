import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorLockBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.77 8.554c0-.19-.09-.38-.23-.53-.15-.14-.37-.19-.55-.22-.42.01-.75.34-.76.77v.15h1.54zM13.27 10.225h-2.54c-.29 0-.52.23-.52.51v1.43c0 .29.23.51.52.51h2.54c.29 0 .52-.22.52-.51v-1.43c0-.28-.23-.51-.52-.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.29 12.164c0 1.11-.91 2.01-2.02 2.01h-2.54c-1.11 0-2.02-.9-2.02-2.01v-1.43c0-.74.42-1.38 1.02-1.73v-.45c.02-1.25 1-2.23 2.24-2.25H12c.6 0 1.16.23 1.58.65.44.42.68.99.69 1.6v.45c.6.34 1.02.99 1.02 1.73zm-1.42 8h-3.74l.44-2.67h2.87zm3.1-17.18H7.03c-2.5 0-4.53 2.04-4.53 4.53v5.45c0 2.5 2.03 4.53 4.53 4.53h2.02l-.44 2.67H7.06c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h9.89a.749.749 0 1 0 0-1.5h-1.56l-.43-2.67h2.01c2.5 0 4.53-2.03 4.53-4.53v-5.45c0-2.49-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorLockBold;
