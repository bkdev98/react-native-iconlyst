import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBoxBulk = ({
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
      d="M21.5 8.645v7.94c0 3.31-2.13 5.53-5.29 5.53H7.78c-3.16 0-5.28-2.22-5.28-5.53v-7.94c0-3.31 2.12-5.53 5.28-5.53h8.43c3.16 0 5.29 2.22 5.29 5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.76 11.805c.1-1.25.96-2.24 2.01-2.24.24 0 .44.2.44.45 0 .83-1.08 1.58-2.45 1.79m2.01 3.86c-1.05 0-1.91-.99-2.01-2.24 1.37.21 2.45.96 2.45 1.79 0 .25-.2.45-.44.45m-5.99-5.65c0-.25.2-.45.45-.45 1.04 0 1.91.99 2.01 2.24-1.38-.21-2.46-.96-2.46-1.79m.45 5.65c-.25 0-.45-.2-.45-.45 0-.83 1.08-1.58 2.46-1.79-.1 1.25-.97 2.24-2.01 2.24m12.27-3.8h-5.56c.49-.53.77-1.16.77-1.85 0-1.08-.87-1.95-1.94-1.95-.76 0-1.45.29-2.02.75v-5.7h-1.5v5.7c-.58-.46-1.27-.75-2.02-.75-1.08 0-1.95.87-1.95 1.95 0 .69.29 1.32.77 1.85H2.5v1.5h5.55c-.48.53-.77 1.16-.77 1.85 0 1.08.87 1.95 1.95 1.95.75 0 1.44-.29 2.02-.75v5.7h1.5v-5.7c.57.46 1.26.75 2.02.75 1.07 0 1.94-.87 1.94-1.95 0-.69-.28-1.32-.77-1.85h5.56z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftBoxBulk;
