import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxSquareOutline = ({
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
      d="M16.215 21.754h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M8.875 14.874c-.35 0-.71-.1-1.02-.3l-1.75-1.11c-.38-.24-.61-.66-.61-1.12s.23-.87.61-1.12l8-5.09c.62-.39 1.42-.39 2.04 0l1.75 1.11c.38.25.61.66.61 1.12 0 .45-.23.87-.61 1.12l-8 5.09c-.31.2-.67.3-1.02.3m-1.73-2.53 1.52.97c.13.08.3.08.43 0l7.77-4.95-1.52-.97a.42.42 0 0 0-.43 0z"
    />
    <Path
      fill={props.color}
      d="M15.135 14.874c-.35 0-.71-.1-1.02-.3l-8-5.09c-.38-.24-.61-.66-.61-1.12s.23-.87.61-1.12l1.75-1.11c.62-.39 1.42-.39 2.04 0l8.01 5.09c.38.24.61.66.61 1.12s-.23.87-.61 1.12l-1.75 1.11c-.31.2-.66.3-1.02.3zm-7.99-6.51 7.77 4.95c.13.08.3.08.43 0l1.52-.97-7.77-4.95a.42.42 0 0 0-.43 0z"
    />
    <Path
      fill={props.color}
      d="M12.005 18.165c-.29 0-.58-.07-.84-.2l-2.07-1.05c-.63-.32-1.02-.96-1.01-1.67l.02-1.12c0-.41.37-.74.76-.74.41 0 .75.35.74.76l-.02 1.12c0 .13.07.26.19.32l2.07 1.05c.1.05.22.05.32 0l2.09-1.06c.12-.06.19-.18.19-.31l.02-1.14c0-.41.38-.74.76-.74.41 0 .75.35.74.76l-.02 1.14c0 .69-.4 1.31-1.01 1.62l-2.09 1.06c-.26.13-.55.2-.83.2z"
    />
  </Svg>
);
export default IconlystDropboxSquareOutline;
