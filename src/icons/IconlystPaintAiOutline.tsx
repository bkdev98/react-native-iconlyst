import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintAiOutline = ({
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
      d="M18.626 14.925c-.57 0-1.14-.22-1.56-.64l-3.39-3.39c-.69-.69-.84-1.77-.37-2.62l.57-1.02c.31-.55.84-.92 1.47-1.01.62-.09 1.24.12 1.69.57l4.13 4.13a2 2 0 0 1 .57 1.69c-.09.63-.46 1.16-1.01 1.47l-1.03.57c-.33.18-.7.27-1.06.27zm-3.01-7.22h-.07c-.16.02-.29.11-.36.25l-.56 1.02c-.15.27-.1.62.12.84l3.39 3.39c.22.22.56.27.84.12l1.03-.57c.14-.08.23-.21.25-.36.01-.09.01-.27-.14-.42l-4.13-4.13a.48.48 0 0 0-.35-.15z"
    />
    <Path
      fill={props.color}
      d="M7.936 21.575c-.4 0-.79-.16-1.09-.46-.41-.41-.56-.97-.41-1.52.7-2.5.69-5.88.65-7.21-.02-.78.53-1.44 1.3-1.58l5.92-.98c.41-.07.79.21.86.62s-.21.79-.62.86l-5.91.98c-.01 1.46 0 5.01-.76 7.71l.27.79-.2-.72c2.83-.78 6.58-.74 7.65-.7l1.03-5.96c.07-.41.45-.69.86-.62s.69.45.62.86l-.98 5.91c-.14.77-.82 1.3-1.56 1.31-1.04-.03-4.59-.08-7.22.65q-.21.06-.42.06z"
    />
    <Path
      fill={props.color}
      d="M12.286 17.695a2.01 2.01 0 0 1-2.02-2.02c0-.54.21-1.05.59-1.43.76-.76 2.1-.76 2.86 0 .38.38.59.89.59 1.43a2.01 2.01 0 0 1-2.02 2.02m0-2.55a.514.514 0 0 0-.52.52c0 .14.05.27.15.37.2.2.54.2.74 0 .1-.1.16-.23.15-.37 0-.14-.05-.27-.15-.37s-.23-.16-.37-.16z"
    />
    <Path
      fill={props.color}
      d="M7.366 21.335c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4.01-4.01c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.01 4.01c-.15.15-.34.22-.53.22M9.016 8.425c-.31 0-.59-.19-.7-.49l-.09-.24c-.25-.69-.79-1.23-1.48-1.48l-.24-.09a.76.76 0 0 1-.49-.7c0-.31.2-.59.49-.7l.24-.09c.69-.25 1.23-.8 1.48-1.48l.09-.24c.11-.29.39-.49.7-.49s.59.2.7.49l.09.24c.25.69.79 1.23 1.48 1.48l.24.09c.29.11.49.39.49.7s-.19.59-.49.7l-.24.09c-.69.25-1.23.8-1.48 1.48l-.09.23c-.11.29-.39.49-.7.49zm-.65-3q.36.285.66.66.285-.36.66-.66a4 4 0 0 1-.66-.66q-.285.36-.66.66M4.016 9.495c-.33 0-.62-.22-.72-.53a.78.78 0 0 0-.52-.52.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.25-.08.44-.27.52-.52.1-.32.39-.53.72-.53s.62.22.72.53c.08.25.27.45.52.52.32.1.53.39.53.72s-.22.62-.53.72c-.25.08-.44.27-.52.52a.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystPaintAiOutline;
