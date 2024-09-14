import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartAiOutline = ({
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
      d="M7.705 17.12c-1.29 0-2.38-1.01-2.49-2.3l-.89-10.58-1.45-.25a.75.75 0 0 1-.61-.87.75.75 0 0 1 .87-.61l2.02.35c.34.06.59.34.62.68l.94 11.16c.04.52.48.92 1 .92h10.62c.5 0 .92-.37.99-.86l.92-6.38c.04-.3-.17-.58-.47-.63h-1.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.69 0 1.74.01 1.8.02 1.12.16 1.9 1.21 1.74 2.33l-.92 6.38a2.525 2.525 0 0 1-2.48 2.15H7.695zM7.295 21.5a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 1 1 0 2.46M18.315 21.5a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 1 1 0 2.46"
    />
    <Path
      fill={props.color}
      d="M11.045 10.56c-.31 0-.59-.2-.7-.49l-.1-.27c-.31-.83-.95-1.48-1.78-1.78l-.27-.1a.76.76 0 0 1-.49-.7c0-.31.2-.59.49-.7l.27-.1c.82-.31 1.47-.96 1.78-1.78l.1-.27c.11-.29.39-.49.7-.49s.59.2.7.49l.1.27c.31.83.95 1.48 1.78 1.78l.27.1c.29.11.49.39.49.7s-.19.59-.49.7l-.27.1c-.83.31-1.47.96-1.78 1.78l-.1.27c-.11.29-.39.49-.7.49m-.94-3.35c.36.27.68.59.95.95.27-.36.59-.68.95-.95a4.8 4.8 0 0 1-.95-.95c-.27.36-.59.68-.95.95M15.675 12.91c-.33 0-.62-.22-.72-.53-.1-.33-.35-.58-.68-.68a.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.32-.1.58-.35.68-.68.1-.32.39-.53.72-.53s.62.22.72.53c.1.33.35.58.68.68.32.1.53.39.53.72s-.22.62-.53.72c-.33.1-.58.35-.68.68a.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystShoppingCartAiOutline;