import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemAiOutline = ({
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
      d="M12.002 20.825c-.66 0-1.29-.28-1.74-.77l-7.31-8.03c-.85-.93-.94-2.31-.23-3.35l2.95-4.32c.5-.74 1.34-1.18 2.24-1.18h8.19c.9 0 1.73.44 2.24 1.18l2.94 4.32c.71 1.04.61 2.42-.24 3.35l-7.31 8.03c-.44.49-1.08.77-1.74.77zm-4.09-16.16c-.4 0-.77.2-1 .53l-2.95 4.32c-.32.46-.27 1.08.1 1.5l7.31 8.03c.16.18.39.28.63.28s.47-.1.63-.28l7.31-8.03c.38-.42.42-1.03.11-1.5l-2.94-4.32c-.23-.33-.6-.53-1-.53h-8.2"
    />
    <Path
      fill={props.color}
      d="M9.682 12.485c-.31 0-.59-.19-.7-.49l-.09-.24c-.27-.72-.83-1.28-1.55-1.55l-.24-.09a.76.76 0 0 1-.49-.7c0-.31.19-.59.49-.7l.24-.09c.72-.27 1.28-.83 1.55-1.55l.09-.25c.11-.29.39-.49.7-.49s.59.2.7.49l.09.24c.27.72.83 1.28 1.55 1.55l.25.09c.29.11.49.39.49.7s-.2.59-.49.7l-.24.09c-.72.27-1.28.83-1.55 1.55l-.09.24c-.11.29-.39.49-.7.49zm-.72-3.07q.405.315.72.72.315-.405.72-.72-.405-.315-.72-.72-.315.405-.72.72M14.342 13.825c-.33 0-.62-.22-.72-.53a.87.87 0 0 0-.58-.58.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.28-.08.49-.3.58-.58.1-.32.39-.53.72-.53s.62.22.72.53c.08.28.3.5.58.58.32.1.53.39.53.72s-.22.62-.53.72c-.28.08-.49.3-.58.58a.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystGemAiOutline;
