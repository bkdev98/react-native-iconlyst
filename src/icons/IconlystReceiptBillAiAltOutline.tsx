import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillAiAltOutline = ({
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
      d="M10.22 21.745c-.09 0-.19-.02-.28-.06l-2.17-.89c-.28-.11-.59-.1-.86.03l-.77.37c-.61.29-1.33.25-1.9-.11s-.92-.99-.92-1.67V6.975c0-2.92 1.76-4.73 4.58-4.73h7.41c2.81 0 4.55 1.81 4.55 4.73v4.29c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.29c0-1.47-.53-3.23-3.05-3.23H7.9c-1.98 0-3.07 1.15-3.07 3.23v12.44a.46.46 0 0 0 .66.43l.77-.37c.65-.31 1.4-.33 2.07-.06l2.18.89c.38.16.57.59.41.98-.12.29-.4.47-.69.47z"
    />
    <Path
      fill={props.color}
      d="M13.69 9.145H8.72c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.97c.41 0 .75.34.75.75s-.34.75-.75.75M12 12.135H8.72c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75s-.34.75-.75.75M16.81 21.745c-.31 0-.59-.2-.7-.49l-.12-.33a3.8 3.8 0 0 0-2.23-2.24l-.33-.12a.76.76 0 0 1-.49-.7c0-.31.19-.59.49-.7l.33-.12c1.04-.38 1.85-1.2 2.23-2.24l.12-.33c.11-.29.39-.49.7-.49s.59.2.7.49l.12.33c.38 1.04 1.2 1.85 2.23 2.24l.33.12c.29.11.49.39.49.7s-.2.59-.49.7l-.33.12c-1.04.38-1.85 1.2-2.23 2.24l-.12.33c-.11.29-.39.49-.7.49m-1.4-3.88c.55.38 1.03.85 1.41 1.41.38-.55.85-1.03 1.41-1.41-.55-.38-1.03-.85-1.41-1.41-.38.55-.85 1.03-1.41 1.41"
    />
  </Svg>
);
export default IconlystReceiptBillAiAltOutline;
