import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardPinBold = ({
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
      d="M12.7 13.779c-.21-.43-.18-1.16-.02-1.55.04-.09.15-.35.76-.81 0 0 .02-.1-.01-.18a.24.24 0 0 0-.22-.15h-2.43c-.09 0-.17.06-.21.15-.03.08-.01.18.05.24.54.4.65.66.69.75.16.38.2 1.11-.02 1.55-.05.1-.2.4-1 .85-.14.12-.24.29-.27.47h3.95a.76.76 0 0 0-.27-.47c-.8-.45-.95-.75-1-.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.11 16.599h-1.36v1.09a.749.749 0 1 1-1.5 0v-1.09H9.88c-.75 0-1.37-.61-1.37-1.37 0-.71.34-1.4.92-1.83l.09-.06c.15-.08.33-.2.43-.27 0-.05-.01-.14-.02-.21a4 4 0 0 0-.28-.24c-.57-.55-.73-1.29-.47-1.94.26-.66.89-1.09 1.6-1.09h2.43c.72 0 1.35.43 1.61 1.09v.01c.26.65.1 1.38-.41 1.87-.15.12-.28.24-.35.3-.01.06-.01.15-.01.21.11.08.28.19.43.27l.09.06c.57.43.91 1.12.91 1.83 0 .76-.61 1.37-1.37 1.37m2.783-12.218c-.12-.036-.238.054-.256.178a2.48 2.48 0 0 1-2.447 2.12H9.81a2.49 2.49 0 0 1-2.457-2.12c-.018-.124-.136-.214-.256-.178A4.25 4.25 0 0 0 4.07 8.459v8.9c0 2.34 1.9 4.25 4.25 4.25h7.36c2.35 0 4.25-1.91 4.25-4.25v-8.9a4.25 4.25 0 0 0-3.037-4.078"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.808 5.48h4.38c.68 0 1.24-.54 1.26-1.22.01-.02.01-.04.01-.06v-.54c0-.7-.57-1.27-1.27-1.27h-4.38c-.7 0-1.28.57-1.28 1.27v.54c0 .02 0 .03.01.05.02.69.59 1.23 1.27 1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardPinBold;
