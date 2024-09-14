import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWiperOutline = ({
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
      d="M11.791 17.59c-.31 0-.6-.2-.71-.51l-3.04-8.81a.74.74 0 0 1 .46-.95c.39-.14.82.07.95.46l3.04 8.81a.74.74 0 0 1-.7.99z"
    />
    <Path
      fill={props.color}
      d="M12.28 20.05c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5"
    />
    <Path
      fill={props.color}
      d="M6.81 16.45a1.7 1.7 0 0 1-1.51-.94L2.65 8.2c-.38-.75-.06-1.77.76-2.18 5.38-2.76 12.31-2.76 17.69 0 .8.41 1.13 1.4.75 2.22l-2.6 7.19c-.44.9-1.41 1.25-2.24.87-1.09-.5-3.31-.81-4.75-.81s-3.66.31-4.75.81c-.23.1-.46.15-.7.15m5.45-11.04c-2.86 0-5.68.67-8.16 1.95-.08.04-.12.16-.07.26l2.65 7.31s.12.06.21.01c1.5-.69 4.09-.94 5.37-.95 1.28 0 3.88.26 5.38.95.09.04.19 0 .24-.1l2.58-7.15s.02-.05.03-.08c.05-.09.02-.22-.07-.26-2.48-1.27-5.3-1.95-8.16-1.95z"
    />
    <Path
      fill={props.color}
      d="M14.28 12.971c-.07 0-.13 0-.2-.03-1.14-.31-2.56-.38-3.8-.16a.75.75 0 0 1-.87-.61c-.07-.41.2-.8.61-.87 1.46-.25 3.09-.18 4.46.19.4.11.63.52.52.92-.09.33-.39.55-.72.55zM16.96 10.93c-.1 0-.21-.02-.31-.07-1.09-.5-3.31-.81-4.75-.81-.71 0-1.65.08-2.5.21-.4.07-.79-.21-.86-.62s.21-.79.62-.86c.92-.15 1.94-.23 2.73-.23 1.28 0 3.88.26 5.38.95a.75.75 0 0 1-.31 1.43"
    />
  </Svg>
);
export default IconlystWiperOutline;
