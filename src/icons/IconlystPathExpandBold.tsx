import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathExpandBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.436 18.142v2.11c0 .11 0 .45-.51.45h-1.99c-.5 0-.5-.34-.5-.45v-2.11c0-.11 0-.44.5-.44h1.99c.51 0 .51.33.51.44m-13.51 2.11c0 .11 0 .45-.5.45h-1.99c-.5 0-.5-.34-.5-.45v-2.11c0-.11 0-.44.5-.44h1.99c.5 0 .5.33.5.44zm-2.99-13.5v-2.11c0-.11 0-.44.5-.44h1.99c.5 0 .5.33.5.44v2.11c0 .11 0 .44-.5.44h-1.99c-.5 0-.5-.33-.5-.44m4.93 6.12a.749.749 0 1 1 1.5 0v.33l2.57-2.57h-.33a.749.749 0 1 1 0-1.5h2.14a.776.776 0 0 1 .53.22c.11.11.17.24.2.38.01.05.02.1.02.15v2.14a.749.749 0 1 1-1.5 0v-.33l-2.57 2.57h.33a.749.749 0 1 1 0 1.5h-2.14c-.05 0-.1-.01-.15-.02a.8.8 0 0 1-.38-.2.78.78 0 0 1-.22-.53zm8.57-8.23c0-.11 0-.44.5-.44h1.99c.51 0 .51.33.51.44v2.11c0 .11 0 .44-.51.44h-1.99c-.5 0-.5-.33-.5-.44zm2.49 4.05c1.16 0 2.01-.81 2.01-1.94v-2.11c0-1.13-.85-1.94-2.01-1.94h-1.99c-1.16 0-2 .81-2 1.94v.54h-7.51v-.54c0-1.13-.84-1.94-2-1.94h-1.99c-1.16 0-2 .81-2 1.94v2.11c0 1.13.84 1.94 2 1.94h.53v7.51h-.53c-1.16 0-2 .82-2 1.94v2.11c0 1.13.84 1.95 2 1.95h1.99c1.16 0 2-.82 2-1.95v-.55h7.51v.55c0 1.13.84 1.95 2 1.95h1.99c1.16 0 2.01-.82 2.01-1.95v-2.11c0-1.12-.85-1.94-2.01-1.94h-.49v-7.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathExpandBold;
