import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFirebaseOutline = ({
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
      d="M11.969 21.754c-.37 0-.73-.09-1.06-.27l-5.7-3.19a.72.72 0 0 1-.38-.63.77.77 0 0 1-.41-.21.754.754 0 0 1 0-1.06l10.34-10.35a2.15 2.15 0 0 1 2.2-.53c.77.24 1.35.92 1.48 1.71l1.43 8.83c.15.9-.29 1.8-1.09 2.24l-5.75 3.19c-.32.18-.69.27-1.05.27zm-6.02-4.77 5.7 3.19c.2.11.45.11.65 0l5.75-3.19c.24-.14.38-.42.33-.69l-1.43-8.83a.68.68 0 0 0-.45-.53.68.68 0 0 0-.68.16l-9.88 9.89z"
    />
    <Path
      fill={props.color}
      d="M4.908 17.534a.73.73 0 0 1-.35-.09.737.737 0 0 1-.31-1.01l5.83-11.1c.37-.72 1.11-1.16 1.92-1.16s1.55.45 1.92 1.16l1 1.91c.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31l-1-1.91c-.23-.45-.95-.44-1.18 0l-5.83 11.1c-.13.26-.4.4-.66.4z"
    />
    <Path
      fill={props.color}
      d="M5.579 18.387c-.12 0-.25-.03-.37-.1a2.17 2.17 0 0 1-1.08-2.23l1.87-11.98c.15-.93.86-1.65 1.79-1.8.92-.15 1.84.3 2.27 1.13l1.18 2.24c.19.37.05.82-.31 1.01-.37.2-.82.05-1.01-.31l-1.18-2.24a.664.664 0 0 0-1.25.21l-1.87 11.98c-.04.28.09.55.33.69.36.2.49.66.29 1.02-.14.25-.39.38-.65.38z"
    />
  </Svg>
);
export default IconlystFirebaseOutline;
