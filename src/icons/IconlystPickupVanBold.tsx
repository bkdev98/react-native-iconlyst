import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPickupVanBold = ({
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
      d="M18.85 16.4c0 .11-.01.22-.05.34-.07.26-.23.48-.45.64-.46.34-1.15.34-1.6.01-.22-.17-.38-.4-.46-.66-.03-.11-.05-.22-.05-.38a1.206 1.206 0 0 1 .34-.92c.12-.13.27-.23.44-.3.16-.07.35-.11.53-.11s.36.04.53.11c.16.07.31.17.43.29a1.143 1.143 0 0 1 .34.93zm-10.17.41c-.01 0-.01.01-.01.01-.07.28-.23.53-.46.7-.46.36-1.16.36-1.61 0a1.3 1.3 0 0 1-.47-.72c-.03-.11-.04-.22-.04-.35 0-.33.14-.66.38-.9s.57-.37.91-.37c.35 0 .68.13.92.37.33.32.48.85.38 1.26M12.708 6.4a.2.2 0 0 1 .2-.198h2.382c.09 0 .19.02.26.07.08.04.15.11.19.19l1.6 2.965a.2.2 0 0 1-.175.295h-4.293a.2.2 0 0 1-.2-.202zm9.402 4.212a3.05 3.05 0 0 0-2.15-.89h-.76l-2.14-3.97c-.17-.32-.43-.59-.74-.77-.31-.19-.66-.28-1.03-.28h-2.58c-.41 0-.8.16-1.1.45-.29.29-.45.68-.45 1.1v3.27a.2.2 0 0 1-.2.2H2.25c-.41 0-.75.33-.75.75v4.07c0 .41.08.8.23 1.17.16.37.38.7.66.98.28.29.62.51.99.66.37.16.76.23 1.16.23h.28c.18.44.48.83.86 1.13a2.82 2.82 0 0 0 3.45 0 2.8 2.8 0 0 0 1-1.52v-.05h4.72v.01c.17.57.53 1.08 1.01 1.44.49.36 1.08.55 1.69.55.6 0 1.2-.19 1.68-.55.37-.27.67-.63.86-1.04.76-.03 1.47-.34 2.02-.88.57-.57.89-1.33.89-2.14v-1.78c0-.81-.32-1.57-.89-2.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPickupVanBold;
