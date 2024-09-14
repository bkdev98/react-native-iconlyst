import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M20.34 11.195a8.297 8.297 0 0 1-3.178 6.549.5.5 0 0 1-.299.101H7.137a.5.5 0 0 1-.3-.101 8.3 8.3 0 0 1-3.177-6.549c0-.27.01-.53.04-.79.37-3.97 3.56-7.15 7.55-7.51a9.4 9.4 0 0 1 1.5 0c3.99.36 7.18 3.54 7.55 7.51.03.26.04.52.04.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.66 20.955c-.03.45-.25.85-.61 1.12-.4.29-.92.29-1.97.29H8.92c-1.05 0-1.57 0-1.97-.29-.36-.27-.58-.67-.61-1.12-.03-.49.26-.93.82-1.81l.043-.067a.5.5 0 0 1 .422-.233h8.75a.5.5 0 0 1 .422.233l.043.067c.57.88.85 1.32.82 1.81M12.77 10.295c.12-1.05.84-1.85 1.72-1.85.18 0 .32.14.32.32 0 .63-.81 1.32-2.04 1.53m-3.59-1.53c0-.18.15-.32.33-.32.87 0 1.6.8 1.72 1.85-1.24-.21-2.05-.9-2.05-1.53m11.16 2.43c0-.27-.01-.53-.04-.79h-4.64c.41-.47.65-1.03.65-1.64 0-1.01-.81-1.82-1.82-1.82-.64 0-1.23.23-1.74.6v-4.65a9.4 9.4 0 0 0-1.5 0v4.65c-.51-.37-1.1-.6-1.74-.6-1.01 0-1.83.81-1.83 1.82 0 .61.25 1.17.66 1.64H3.7a8.253 8.253 0 0 0-.01 1.5h6.57l-1.37 1.5c-.28.31-.25.78.05 1.06.31.28.78.26 1.06-.05l1.25-1.37v4.73c0 .02 0 .05.01.07h1.48c.01-.02.01-.05.01-.07v-4.73l1.25 1.37c.14.16.35.25.55.25.18 0 .36-.07.51-.2.3-.28.32-.75.05-1.06l-1.37-1.5h6.57c.02-.23.03-.47.03-.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftGlobeBulk;
