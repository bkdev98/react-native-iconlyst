import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleGmailEmailOutline = ({
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
      d="M6.912 9.371a.75.75 0 0 1 .75.75v10.31a.75.75 0 0 1-1.5 0V10.12a.75.75 0 0 1 .75-.75M17.088 9.36a.75.75 0 0 1 .75.75v10.32a.75.75 0 0 1-1.5 0V10.11a.75.75 0 0 1 .75-.75M19.277 3.57a.75.75 0 0 1-.238 1.034l-.396.249-6.354 4.289a.75.75 0 0 1-.84 0L5.106 4.86l-.255-.147a.75.75 0 0 1 .753-1.298l.276.16.044.027 5.945 4.014 5.945-4.014.021-.013.408-.256a.75.75 0 0 1 1.034.237"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.551 6.94a.75.75 0 0 1-.202 1.041l-7.987 5.387a2.6 2.6 0 0 1-2.908 0L2.651 8.105A.75.75 0 0 1 3.49 6.86l7.803 5.264a1.1 1.1 0 0 0 1.23 0l7.987-5.387a.75.75 0 0 1 1.041.202"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.672 4.296c.941-1.01 2.28-1.573 3.858-1.573h8.939c1.581 0 2.921.563 3.861 1.573.935 1.004 1.42 2.388 1.42 3.938v7.53c0 1.55-.485 2.934-1.42 3.938-.94 1.01-2.28 1.573-3.862 1.573H7.53c-1.581 0-2.92-.563-3.861-1.573-.935-1.004-1.419-2.389-1.419-3.939V8.235c0-1.55.487-2.935 1.422-3.938M4.77 5.319c-.634.68-1.02 1.676-1.02 2.915v7.53c0 1.24.384 2.236 1.017 2.916.627.673 1.552 1.095 2.763 1.095h8.938c1.211 0 2.138-.422 2.765-1.095.632-.68 1.017-1.676 1.017-2.916v-7.53c0-1.24-.385-2.236-1.017-2.916-.627-.673-1.553-1.095-2.764-1.095H7.53c-1.206 0-2.132.422-2.76 1.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleGmailEmailOutline;
