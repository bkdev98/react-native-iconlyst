import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappOutline = ({
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
      d="M13.995 16.763c-1.32 0-2.87-.8-4.41-2.33-2.47-2.47-3.05-4.97-1.51-6.51l.13-.13c.43-.42 1.01-.64 1.61-.58.6.05 1.13.36 1.47.86l.46.66c.51.72.49 1.67-.02 2.36.36.49.69.85 1.17 1.2a2.01 2.01 0 0 1 2.37-.03l.66.46c.49.34.8.88.86 1.48.05.6-.16 1.18-.59 1.6l-.13.13c-.58.57-1.28.86-2.07.86zm-4.37-8.07c-.1 0-.24.03-.37.15l-.13.13c-1.06 1.07.08 2.97 1.51 4.4 1.41 1.41 3.29 2.54 4.36 1.48l.13-.13c.15-.15.16-.32.15-.41 0-.09-.05-.26-.22-.38l-.66-.46a.53.53 0 0 0-.67.05l-.24.23c-.24.24-.62.29-.91.11-1.16-.69-1.73-1.36-2.45-2.44-.2-.3-.16-.69.09-.94l.23-.24c.18-.18.2-.46.05-.67l-.46-.66a.53.53 0 0 0-.38-.22h-.05z"
    />
  </Svg>
);
export default IconlystWhatsappOutline;
