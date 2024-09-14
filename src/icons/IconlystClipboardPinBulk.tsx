import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardPinBulk = ({
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
      fillRule="evenodd"
      d="M16.893 4.383c-.12-.036-.238.054-.256.178a2.48 2.48 0 0 1-2.447 2.12H9.81a2.49 2.49 0 0 1-2.457-2.12c-.018-.124-.136-.213-.256-.178A4.25 4.25 0 0 0 4.07 8.461v8.9c0 2.34 1.9 4.25 4.25 4.25h7.36c2.35 0 4.25-1.91 4.25-4.25v-8.9a4.25 4.25 0 0 0-3.037-4.078"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.81 5.48h4.38c.68 0 1.24-.54 1.26-1.22.01-.02.01-.04.01-.06v-.54c0-.7-.57-1.27-1.27-1.27H9.81c-.7 0-1.28.57-1.28 1.27v.54c0 .02 0 .03.01.05.02.69.59 1.23 1.27 1.23M12.75 16.6h1.36c.76 0 1.37-.61 1.37-1.37 0-.71-.34-1.4-.91-1.83l-.09-.06c-.15-.08-.32-.19-.43-.27 0-.06 0-.15.01-.21l.072-.064c.073-.063.17-.15.278-.236a1.7 1.7 0 0 0 .41-1.87v-.01c-.26-.66-.89-1.09-1.61-1.09h-2.43c-.71 0-1.34.43-1.6 1.09-.26.65-.1 1.39.47 1.94.1.08.22.18.28.24.01.07.02.16.02.21-.1.07-.28.19-.43.27l-.09.06c-.58.43-.92 1.12-.92 1.83 0 .76.62 1.37 1.37 1.37h1.37v1.09a.749.749 0 1 0 1.5 0zm-.07-4.37c-.16.39-.19 1.12.02 1.55.05.1.2.4 1 .85.15.12.24.29.27.47h-3.95c.03-.18.13-.35.27-.47.8-.45.95-.75 1-.85.22-.44.18-1.17.02-1.55l-.002-.004c-.041-.094-.156-.352-.688-.746a.24.24 0 0 1-.05-.24c.04-.09.12-.15.21-.15h2.43c.1 0 .18.06.22.15.03.08.01.18.01.18-.602.454-.717.713-.758.806z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardPinBulk;
