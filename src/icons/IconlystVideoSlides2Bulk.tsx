import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlides2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.834 3.438h-5.98c-2 0-3.62 1.63-3.62 3.62v9.88c0 2 1.62 3.62 3.62 3.62h5.98c2 0 3.63-1.62 3.63-3.62v-9.88c0-1.99-1.63-3.62-3.63-3.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.235 6.927c.005-.225-.214-.4-.411-.293a2.86 2.86 0 0 0-1.49 2.492v5.74a2.85 2.85 0 0 0 1.493 2.505c.197.106.414-.068.409-.291l-.002-.144v-9.88zM20.874 6.646c-.196-.109-.416.067-.411.292v10.126000000000001c-.005.225.215.4.411.292a2.84 2.84 0 0 0 1.46-2.49v-5.74c0-1.065-.59-1.997-1.46-2.48M15.39 13.44a8.6 8.6 0 0 1-2.456 1.546q-.405.15-.78.15c-.31 0-.6-.08-.86-.24-.46-.27-.74-.73-.82-1.3-.11-1.11-.11-2.18 0-3.19.08-.58.38-1.05.84-1.31.48-.28 1.07-.31 1.62-.08.94.4 1.78.92 2.47 1.55.43.39.66.9.67 1.43 0 .529-.239 1.037-.666 1.437a.01.01 0 0 1-.01.003zm-.816-1.444c-.01-.14-.12-.26-.18-.32-.58-.53-1.24-.94-2.04-1.27a.4.4 0 0 0-.252-.031.13.13 0 0 0-.068.038.35.35 0 0 0-.07.173c-.1.89-.1 1.85 0 2.84.02.09.05.16.1.19.04.03.15.04.31-.03.73-.29 1.43-.73 2.01-1.26.09-.08.19-.2.19-.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlides2Bulk;
