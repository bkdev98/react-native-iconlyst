import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentHideBold = ({
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
      d="m21.05 19.463-1.43-1.43c.04-.2.05-.4.05-.6v-7.84c0-.24-.19-.44-.43-.44h-2.97c-1.76-.01-3.22-1.47-3.22-3.25v-3.14a.44.44 0 0 0-.44-.45H7.45c-.99 0-1.91.34-2.64.91l-.8-.81a.754.754 0 0 0-1.06 0c-.29.3-.29.77 0 1.06l17.04 17.05c.14.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.4 7.733c.67 0 1.61.01 2.4 0 .41 0 .61-.49.33-.78-.51-.54-1.21-1.28-1.93-2.03-.71-.75-1.43-1.5-1.95-2.05-.29-.31-.8-.1-.8.32v2.57c0 1.08.88 1.97 1.95 1.97M3.1 6.713v10.5c0 2.53 2.05 4.59 4.56 4.59h7.67c1.06 0 2.04-.39 2.79-1.03L3.19 5.833c-.06.28-.09.58-.09.88"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentHideBold;
