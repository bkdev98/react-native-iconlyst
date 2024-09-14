import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFileAiAltOutline = ({
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
      d="M15.595 21.75h-7.19c-2.46 0-4.47-2.01-4.47-4.47V6.72c0-2.47 2-4.47 4.47-4.47h5.07c.76 0 1.49.31 2.02.86l3.79 3.95c.5.52.78 1.21.78 1.94v8.28c0 2.47-2.01 4.47-4.47 4.47m-7.19-18a2.97 2.97 0 0 0-2.97 2.97v10.56a2.97 2.97 0 0 0 2.97 2.97h7.19a2.97 2.97 0 0 0 2.97-2.97V9c0-.34-.13-.66-.36-.9l-3.79-3.95c-.24-.25-.59-.4-.94-.4z"
    />
    <Path
      fill={props.color}
      d="M10.175 14.61c-.31 0-.59-.2-.7-.49l-.1-.26a2.75 2.75 0 0 0-1.65-1.65l-.26-.09a.76.76 0 0 1-.49-.7c0-.31.19-.59.49-.7l.26-.1c.77-.28 1.37-.89 1.65-1.65l.1-.26c.11-.29.39-.49.7-.49s.59.2.7.49l.1.26c.28.77.88 1.37 1.65 1.65l.26.1c.29.11.49.39.49.7s-.2.59-.49.7l-.26.09c-.76.28-1.36.88-1.65 1.65l-.1.26c-.11.29-.39.49-.7.49m-.82-3.19c.31.23.58.51.82.82.23-.31.51-.58.82-.82-.31-.23-.58-.51-.82-.82-.23.31-.51.58-.82.82M14.995 16.45c-.33 0-.62-.22-.72-.53a.93.93 0 0 0-.61-.61.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72a.93.93 0 0 0 .61-.61c.1-.32.39-.53.72-.53s.62.22.72.53c.09.29.32.52.61.61.32.1.53.39.53.72s-.22.62-.53.72a.93.93 0 0 0-.61.61.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystFileAiAltOutline;
