import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailAiOutline = ({
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
      d="M7.57 20.85c-1.41 0-2.67-.51-3.64-1.48-1.09-1.08-1.68-2.6-1.68-4.28V8.91c0-3.29 2.29-5.76 5.33-5.76h8.84c3.04 0 5.33 2.48 5.33 5.76v2.58c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.91c0-2.47-1.61-4.26-3.83-4.26H7.58c-2.22 0-3.83 1.79-3.83 4.26v6.18c0 1.28.44 2.42 1.23 3.21.68.68 1.58 1.04 2.59 1.04h5.16c.41 0 .75.34.75.75s-.34.75-.75.75H7.57z"
    />
    <Path
      fill={props.color}
      d="M12.02 13.62c-.62 0-1.24-.21-1.75-.62L6.23 9.75a.747.747 0 1 1 .94-1.16l4.03 3.25c.48.38 1.15.38 1.64 0l3.99-3.25a.76.76 0 0 1 1.06.11c.26.32.21.79-.11 1.05l-4 3.25c-.52.41-1.14.62-1.76.62M18.15 20.61c-.31 0-.59-.2-.7-.49l-.11-.3a3.35 3.35 0 0 0-2-2l-.3-.11a.76.76 0 0 1-.49-.7c0-.31.19-.59.49-.7l.3-.11c.93-.34 1.66-1.07 2-2l.11-.3c.11-.29.39-.49.7-.49s.59.2.7.49l.11.3c.34.93 1.07 1.66 2 2l.3.11c.29.11.49.39.49.7s-.2.59-.49.7l-.3.11c-.93.34-1.65 1.07-2 2l-.11.3c-.11.29-.39.49-.7.49M16.98 17c.45.32.85.72 1.17 1.17.32-.45.72-.85 1.17-1.17-.45-.32-.85-.72-1.17-1.17-.32.45-.72.85-1.17 1.17"
    />
  </Svg>
);
export default IconlystEmailAiOutline;
