import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapSearchBold = ({
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
      d="M20.93 3.24c-.51-.33-1.14-.38-1.7-.13l-3 1.33-.07.108V9.68c.25-.03.5-.04.75-.04 1.667 0 3.187.643 4.317 1.693.2.186.523.04.523-.232v-6.35c0-.61-.31-1.17-.82-1.51M7.683 2.733 3.834 4.434a2.67 2.67 0 0 0-1.584 2.44v12.663a1.79 1.79 0 0 0 2.522 1.64l2.998-1.333a.11.11 0 0 0 .065-.1V2.834a.11.11 0 0 0-.152-.1M14.66 10.05V4.623l-.067-.096C14.02 4.32 10.257 2.96 9.48 2.67c-.07-.02-.15.03-.15.11v16.87c0 .05.03.09.07.1l1.886.683c.371.134.712-.294.476-.61a6.34 6.34 0 0 1-1.252-3.793c0-2.73 1.73-5.07 4.15-5.98"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.198 15.994a2.71 2.71 0 0 1 2.708-2.708 2.71 2.71 0 0 1 2.708 2.708 2.71 2.71 0 0 1-2.708 2.709 2.71 2.71 0 0 1-2.708-2.709m6.081 2.491a4.17 4.17 0 0 0 .835-2.491 4.213 4.213 0 0 0-4.208-4.208 4.213 4.213 0 0 0-4.208 4.208 4.213 4.213 0 0 0 4.208 4.209c.844 0 1.626-.255 2.286-.684l1.278 1.276a.751.751 0 0 0 1.06-1.063z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapSearchBold;
