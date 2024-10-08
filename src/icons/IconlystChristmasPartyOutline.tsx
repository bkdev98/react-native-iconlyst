import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasPartyOutline = ({
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
      d="M8.819 18.214c-.49 0-.92-.14-1.26-.46-1.49-1.39.27-4.85 2.79-7.54 1.27-1.36 2.66-2.47 3.92-3.13 1.91-.99 2.91-.64 3.41-.17 1.49 1.39-.28 4.85-2.79 7.54-1.95 2.09-4.38 3.76-6.08 3.76zm-.23-1.55c.34.32 2.59-.42 5.21-3.23s3.2-5.11 2.86-5.42c-.11-.1-.66-.13-1.69.41-1.11.58-2.36 1.58-3.52 2.82-2.62 2.81-3.21 5.1-2.86 5.42"
    />
    <Path
      fill={props.color}
      d="M20.43 21.314c-.13 0-.25-.02-.38-.05l-11.81-3.11a.765.765 0 0 1-.54-.92c.11-.4.52-.64.92-.54l11.81 3.11-3.8-11.91a.75.75 0 1 1 1.43-.45l3.79 11.92c.16.52.03 1.09-.34 1.48-.29.3-.68.47-1.08.47"
    />
    <Path
      fill={props.color}
      d="M17.49 20.524s-.1 0-.15-.01a.75.75 0 0 1-.59-.88c.59-2.93-.57-6.21-1.27-7.54a.746.746 0 0 1 .32-1.01c.37-.19.82-.05 1.01.32.78 1.49 2.08 5.2 1.41 8.54-.07.36-.38.6-.73.6zM14.1 19.594h-.07a.75.75 0 0 1-.68-.81c.11-1.2-.03-2.57-.39-3.98a.75.75 0 0 1 1.45-.37c.41 1.6.56 3.11.43 4.49a.75.75 0 0 1-.75.68zM7.479 11.664c-.25 0-.5-.13-.64-.36a.69.69 0 0 0-.45-.33.74.74 0 0 0-.56.09l-.18.11c-1.15.7-2.66.33-3.35-.82l-.11-.19c-.21-.36-.1-.82.26-1.03s.82-.1 1.03.26l.11.19c.27.44.85.58 1.29.31l.18-.11c.51-.31 1.11-.4 1.69-.26s1.07.5 1.38 1.01c.21.35.1.82-.25 1.03-.12.07-.25.11-.39.11zM13.13 12.274a.755.755 0 0 1-.55-1.27c.21-.22.33-.52.32-.83 0-.31-.13-.6-.36-.81l-.16-.15c-.47-.45-.74-1.05-.75-1.71s.22-1.27.67-1.74l.14-.15c.14-.14.21-.33.2-.53a.78.78 0 0 0-.23-.52.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03.43.41.68.97.7 1.57s-.2 1.17-.62 1.6l-.14.15c-.17.18-.27.42-.26.67 0 .25.11.49.29.66l.16.15c.51.49.8 1.15.82 1.86s-.24 1.38-.73 1.9a.72.72 0 0 1-.54.23zM9.159 8.023c-.06 0-.13 0-.19-.02a.75.75 0 0 1-.54-.91c.12-.46-.05-1.14-.4-1.57a.76.76 0 0 1 .11-1.06.76.76 0 0 1 1.06.11c.65.8.93 1.96.68 2.89-.09.34-.39.56-.72.56M4.239 6.364c-.19 0-.38-.07-.52-.21l-.41-.39a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l.41.39c.3.29.31.76.02 1.06-.15.15-.34.23-.54.23M3.75 15.424c-.38 0-.7-.28-.74-.66-.05-.41.25-.78.66-.83l.56-.06c.42-.04.78.25.83.66s-.25.78-.66.83l-.56.06z"
    />
  </Svg>
);
export default IconlystChristmasPartyOutline;
