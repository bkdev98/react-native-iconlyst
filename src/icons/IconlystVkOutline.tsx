import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkOutline = ({
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
      d="M12.097 18.096c-1.9 0-3.91-.94-5.53-2.62-1-.98-1.72-2.2-2.41-3.38l-.17-.29c-.72-1.29-1.22-2.45-1.56-3.58l-.03-.13c-.12-.44-.29-1.11.06-1.65.13-.2.38-.46.85-.54h.1c.45-.01.9-.01 1.35-.01h.83c1.21-.04 1.57 1.02 1.76 1.59l.05.15c.41 1.11 1.05 2.66 2 3.79v-2.39c-.02-.25-.08-.65-.32-.92-.41-.51-.53-1.07-.32-1.52.09-.2.39-.67 1.18-.69h3.31c.47.08 1.02.4 1.02 1.52v3.23c.82-.98 1.54-2.19 2.26-3.82.28-.6.83-.94 1.52-.94h2.01c.69 0 1.01.37 1.14.58.42.72-.02 1.65-.47 2.47l-.06.11c-.58 1.03-1.23 1.99-1.86 2.93l-.23.35s.07.09.1.12l.08.1.48.49c.78.8 1.58 1.64 2.19 2.65.34.57.42 1.17.21 1.63-.17.39-.53.65-.99.74-.03 0-.07.01-.11.01-.28.01-.56.01-.84.01h-.76c-.67 0-1.25 0-2.02-.62-.27-.27-.47-.51-.68-.74-.62-.7-1.25-1.43-1.97-1.76v.73c0 .38 0 .76-.01 1.14-.06.64-.54 1.09-1.23 1.19-.3.05-.62.08-.93.08zm-8.33-10.71c.02.12.06.25.08.33l.03.11c.3.99.76 2.06 1.41 3.23l.17.28c.65 1.09 1.32 2.23 2.19 3.08 1.55 1.61 3.47 2.4 5.13 2.12v-1.72c0-.04 0-.08.01-.12.06-.32.16-.87.64-1.15.43-.26.91-.15 1.22-.05 1.16.46 1.99 1.41 2.72 2.24.19.22.38.44.57.64.28.22.41.22.99.22h1.27l-.06-.12c-.52-.87-1.23-1.61-1.99-2.38l-.65-.7c-.26-.33-.75-.95-.23-1.8l.3-.44c.61-.91 1.25-1.85 1.79-2.81l.06-.11c.22-.4.34-.66.4-.83h-1.76c-.15 0-.15.03-.16.06-.79 1.77-1.59 3.12-2.52 4.21-.75.89-1.37.91-1.76.77-.38-.14-.84-.53-.85-1.63v-3.41h-2.36c.28.43.45.98.48 1.59v2.75c0 .27 0 .59-.08.92-.13.39-.38.63-.7.72-.54.15-1.04-.18-1.3-.39-1.45-1.38-2.31-3.42-2.83-4.84l-.06-.18c-.06-.18-.17-.51-.25-.57h-1.91z"
    />
  </Svg>
);
export default IconlystVkOutline;