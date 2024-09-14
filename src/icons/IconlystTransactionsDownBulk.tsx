import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownBulk = ({
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
      d="M21.5 12c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5c3.82 0 7.13 2.27 8.64 5.53.23.5.41 1.02.55 1.57.2.76.31 1.57.31 2.4"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.363 8.492h6.271a.75.75 0 1 0 0-1.5h-6.27a.75.75 0 0 0 0 1.5M10.595 10.742a.75.75 0 0 0-.75-.75H7.364a.75.75 0 1 0 0 1.5h2.48a.75.75 0 0 0 .75-.75M21.19 9.6l-4.49 4.6a.72.72 0 0 1-.53.23c-.22-.02-.39-.08-.54-.22l-1.76-1.76-3.15 3.29h1c.41 0 .74.34.75.75 0 .41-.34.75-.75.75l-2.76.01h-.01c-.09 0-.19-.02-.28-.06-.01 0-.02-.01-.04-.02a.6.6 0 0 1-.2-.13v-.01c-.02-.01-.02-.02-.03-.04a.66.66 0 0 1-.19-.49l-.01-2.77a.749.749 0 1 1 1.5 0v.91l3.62-3.78a.76.76 0 0 1 .53-.23c.2-.02.4.08.54.22l1.77 1.76 4.48-4.58c.23.5.41 1.02.55 1.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsDownBulk;
