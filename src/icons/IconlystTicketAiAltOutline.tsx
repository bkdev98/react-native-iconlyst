import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketAiAltOutline = ({
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
      d="M16.6 20.05H7.41c-1.15 0-1.73 0-2.27-.16a3.97 3.97 0 0 1-2.73-2.73c-.16-.54-.16-1.12-.16-2.27 0-.32 0-.47.03-.56.08-.42.17-.58.5-.85.11-.09.25-.17.82-.48.37-.2.59-.56.61-.97 0-.47-.23-.85-.62-1.05l-.1-.05c-.46-.25-.59-.31-.69-.39-.33-.27-.44-.45-.52-.86-.02-.1-.03-.25-.03-.54 0-1.18 0-1.75.16-2.3.38-1.33 1.4-2.34 2.72-2.73.54-.16 1.12-.16 2.27-.16h9.19c1.15 0 1.73 0 2.28.16a3.96 3.96 0 0 1 2.72 2.72c.16.55.16 1.13.16 2.28 0 .28 0 .42-.03.57-.08.41-.19.59-.52.85-.11.09-.24.16-.71.4l-.09.05c-.39.2-.62.58-.62 1.02s.23.82.62 1.02c.55.29.68.36.79.45.33.27.44.45.52.86.02.1.03.25.03.56 0 1.15 0 1.73-.16 2.28a3.96 3.96 0 0 1-2.72 2.72c-.55.16-1.12.16-2.28.16zM3.77 14.63v.27c0 1.01 0 1.51.1 1.85.24.83.87 1.46 1.7 1.7.34.1.84.1 1.85.1h9.19c1.01 0 1.52 0 1.86-.1.82-.24 1.46-.87 1.7-1.7.1-.34.1-.88.1-1.86v-.25c-.11-.07-.27-.15-.5-.28-.91-.48-1.45-1.38-1.45-2.37s.54-1.89 1.42-2.35c.29-.15.45-.23.53-.28V9.1c0-1.01 0-1.52-.1-1.86-.24-.82-.87-1.46-1.7-1.7-.34-.1-.85-.1-1.86-.1H7.42c-1.01 0-1.52 0-1.86.1-.83.24-1.46.87-1.7 1.7-.1.34-.1.88-.1 1.86v.25c.1.06.24.13.44.24l.1.05a2.63 2.63 0 0 1 1.41 2.35c-.03 1.01-.56 1.86-1.37 2.31-.29.16-.48.26-.58.32z"
    />
    <Path
      fill={props.color}
      d="M10.18 14.61c-.31 0-.59-.2-.7-.49l-.09-.26a2.75 2.75 0 0 0-1.65-1.65l-.26-.09a.76.76 0 0 1-.49-.7c0-.31.2-.59.49-.7l.26-.09c.76-.28 1.37-.88 1.65-1.65l.09-.26c.11-.29.39-.49.7-.49s.59.2.7.49l.1.26c.28.77.88 1.37 1.65 1.65l.26.09c.29.11.49.39.49.7s-.2.59-.49.7l-.26.09c-.76.28-1.37.89-1.65 1.65l-.1.26c-.11.29-.39.49-.7.49m-.82-3.2c.31.24.58.51.82.82.23-.31.51-.59.82-.82-.31-.24-.58-.51-.82-.82-.23.31-.51.59-.82.82M15.18 15.78c-.33 0-.62-.22-.72-.53a.93.93 0 0 0-.61-.61.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72a.93.93 0 0 0 .61-.61c.1-.32.39-.53.72-.53s.62.22.72.53c.09.29.32.52.61.61.32.1.53.39.53.72s-.22.62-.53.72a.93.93 0 0 0-.61.61.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystTicketAiAltOutline;
