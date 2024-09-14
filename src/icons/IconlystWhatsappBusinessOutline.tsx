import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappBusinessOutline = ({
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
      d="M12.004 21.735c-1.52 0-3.04-.36-4.39-1.04-.1-.05-.17-.04-.19-.03-.81.19-2.11.51-3.06.75-.51.13-1.04-.01-1.41-.38s-.53-.89-.41-1.4c.24-1.02.56-2.45.72-3.16.01-.06 0-.12-.02-.17-.66-1.41-.99-2.86-.99-4.31 0-2.9 1.29-5.64 3.54-7.5 2.24-1.86 5.18-2.61 8.06-2.07 3.89.73 6.99 3.83 7.72 7.72.54 2.88-.21 5.82-2.07 8.06-1.87 2.25-4.6 3.54-7.5 3.54zm-4.53-2.58c.28 0 .55.07.81.2a8.234 8.234 0 0 0 10.06-2.12 8.27 8.27 0 0 0 1.75-6.83c-.62-3.29-3.24-5.91-6.53-6.52-2.44-.46-4.93.18-6.83 1.75-1.9 1.58-3 3.9-3 6.35 0 1.23.28 2.47.85 3.68.17.36.21.75.13 1.13-.16.71-.48 2.15-.72 3.17.95-.25 2.26-.58 3.08-.77.13-.03.26-.05.39-.05z"
    />
    <Path
      fill={props.color}
      d="M12.765 16.644h-2.91c-.67 0-1.21-.54-1.21-1.21v-6.88c0-.67.54-1.21 1.21-1.21h2.91c1.43 0 2.59 1.21 2.59 2.7 0 .77-.31 1.46-.8 1.95.49.49.8 1.19.8 1.95 0 1.49-1.16 2.7-2.59 2.7m-2.62-1.5h2.62c.6 0 1.09-.54 1.09-1.2s-.49-1.2-1.09-1.2h-2.62v2.41zm0-3.91h2.62c.6 0 1.09-.54 1.09-1.2s-.49-1.2-1.09-1.2h-2.62v2.41z"
    />
  </Svg>
);
export default IconlystWhatsappBusinessOutline;
