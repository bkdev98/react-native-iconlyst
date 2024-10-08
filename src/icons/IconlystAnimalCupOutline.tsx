import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalCupOutline = ({
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
      d="M8.02 21.16H6.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.07l.72-2.25c.1-.31.39-.52.71-.52h2.34v-1.25c-5.97-.79-6.05-11-6.05-11.45a.75.75 0 0 1 .75-.75h12.1c.41 0 .75.34.75.75 0 .45-.07 10.67-6.05 11.45v1.24h2.49c.33 0 .62.21.71.52l.72 2.25h1.07c.41 0 .75.34.75.75s-.34.75-.75.75H8zm1.03-1.5h6.06l-.41-1.27H9.46zM6.73 4.94c.13 2.33.9 9.25 5.28 9.25s5.14-6.92 5.27-9.25H6.73"
    />
    <Path
      fill={props.color}
      d="M5.4 12.35c-.14 0-.28-.04-.41-.12-3.15-2.08-2.73-6.18-2.71-6.36a.75.75 0 0 1 .75-.67h3.03c.41 0 .75.34.75.75s-.34.75-.75.75h-2.3c.03 1.06.33 3.13 2.06 4.27.35.23.44.69.21 1.04a.74.74 0 0 1-.63.34M18.6 12.35a.753.753 0 0 1-.42-1.38c1.74-1.14 2.03-3.21 2.06-4.27h-2.3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.03c.38 0 .7.29.75.67.02.17.44 4.28-2.71 6.36-.13.08-.27.12-.41.12M12.06 7.29a.913.913 0 0 1-.65-1.55c.17-.17.4-.269.64-.269.5 0 .91.41.91.91s-.41.91-.91.91zM14.35 8.45c-.5 0-.91-.41-.91-.91 0-.22.09-.46.26-.63s.41-.27.65-.27c.5 0 .91.41.91.91s-.41.91-.91.91zM9.79 8.451c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91M10.54 12.161c-.25 0-.51-.05-.75-.21-.33-.21-.53-.57-.6-1.04-.1-.6.1-1.22.55-1.75.57-.67 1.47-1.08 2.34-1.08 1.54 0 2.89 1.22 2.9 2.6 0 .54-.15.94-.48 1.2-.52.41-1.16.26-1.72.12-.46-.11-.82-.14-1.33 0-.28.08-.6.16-.92.16zm1.54-2.59c-.43 0-.91.22-1.2.56-.09.1-.23.31-.21.52.12-.02.28-.06.4-.1.3-.08.65-.17 1.01-.17s.74.09 1.06.16c.1.02.23.05.34.08-.06-.49-.66-1.04-1.4-1.04z"
    />
  </Svg>
);
export default IconlystAnimalCupOutline;
