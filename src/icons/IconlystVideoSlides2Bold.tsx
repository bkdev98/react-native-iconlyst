import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlides2Bold = ({
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
      d="M5.235 6.928c.005-.225-.214-.4-.411-.292a2.86 2.86 0 0 0-1.49 2.491v5.74a2.85 2.85 0 0 0 1.493 2.505c.197.107.414-.067.409-.291l-.002-.143v-9.88zM20.874 6.648c-.196-.11-.416.066-.411.291v10.126000000000001c-.005.225.215.401.411.292a2.84 2.84 0 0 0 1.46-2.49v-5.74c0-1.065-.59-1.997-1.46-2.48M14.394 11.677c.06.06.17.18.18.32 0 .13-.1.25-.19.33-.58.53-1.28.97-2.01 1.26-.16.07-.27.06-.31.03-.05-.03-.08-.1-.1-.19-.1-.99-.1-1.95 0-2.84a.35.35 0 0 1 .07-.173.13.13 0 0 1 .068-.038.392.392 0 0 1 .251.031c.8.33 1.46.74 2.04 1.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.408 13.434-.009.004-.009.003a8.6 8.6 0 0 1-2.456 1.547q-.405.15-.78.15c-.31 0-.6-.08-.86-.24-.46-.27-.74-.73-.82-1.3-.11-1.11-.11-2.18 0-3.19.08-.58.38-1.05.84-1.31.48-.28 1.07-.31 1.62-.08.94.4 1.78.92 2.47 1.55.43.39.66.9.67 1.43 0 .528-.239 1.037-.666 1.436m.426-9.996h-5.98c-2 0-3.62 1.63-3.62 3.62v9.88c0 2 1.62 3.62 3.62 3.62h5.98c2 0 3.63-1.62 3.63-3.62v-9.88c0-1.99-1.63-3.62-3.63-3.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlides2Bold;
