import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBagBold = ({
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
      fillRule="evenodd"
      d="m21.223 19.873-1.26-11.83c-.11-1.05-.72-1.84-1.75-1.96v-.01c-.29-1.41-1.55-2.72-2.89-3.2a.75.75 0 0 0-.96.45c-.14.39.08.76.45.96.98.54 1.54 1.2 1.85 1.79.43.8.42 1.47.43 1.58l1.02 12.16c.05.49-.02 1-.2 1.48-.13.38-.33.75-.59 1.07h1.66a2.25 2.25 0 0 0 2.24-2.49"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.573 15.631c-.99.3-1.76 1.07-2.06 2.06a.73.73 0 0 1-.71.53c-.33 0-.63-.21-.72-.53-.3-.99-1.07-1.76-2.06-2.06a.73.73 0 0 1-.53-.71c0-.33.21-.63.53-.72.99-.3 1.76-1.07 2.06-2.06.09-.32.39-.53.72-.53s.62.21.71.53c.3.99 1.07 1.76 2.06 2.06.32.09.53.39.53.72s-.21.62-.53.71m-2.32-11.65c.13 0 .27.01.39.04-.5.56-.82 1.27-.93 2.01h-1.66a2.207 2.207 0 0 1 2.2-2.05m1.71.83c.27.34.45.76.48 1.22h-1.2c.11-.47.36-.9.72-1.22m1.98 1.24a3.6 3.6 0 0 0-1.39-2.75.6.6 0 0 0-.16-.12c-.6-.44-1.34-.7-2.14-.7-2 0-3.62 1.57-3.7 3.55h-.65c-.08 0-.17 0-.25.02-.86.09-1.59.69-1.86 1.48-.08.18-.12.38-.14.58l-.88 11.83c-.03.31.02.63.13.92.09.28.25.55.46.78.42.46 1.03.72 1.65.72h9.52c.63 0 1.23-.26 1.65-.72.43-.46.64-1.08.6-1.7l-.89-11.83a2.26 2.26 0 0 0-1.95-2.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarBagBold;
