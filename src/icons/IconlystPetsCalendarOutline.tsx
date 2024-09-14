import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsCalendarOutline = ({
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
      d="M15.805 22.05h-7.61c-3.11 0-5.04-1.92-5.04-5.01V8.9c0-3.04 1.93-4.93 5.04-4.93h7.62c1.56 0 2.85.47 3.73 1.35.86.86 1.31 2.1 1.3 3.58v8.21c0 3.05-1.93 4.94-5.04 4.94M8.195 5.47c-2.29 0-3.54 1.22-3.54 3.43v8.14c0 2.26 1.26 3.51 3.54 3.51h7.61c2.29 0 3.54-1.22 3.54-3.44V8.9c0-1.09-.29-1.94-.87-2.52-.6-.6-1.52-.91-2.67-.91h-7.62z"
    />
    <Path
      fill={props.color}
      d="M15.635 6.63c-.41 0-.75-.34-.75-.75V3.3c0-.41.34-.75.75-.75s.75.34.75.75v2.58c0 .41-.34.75-.75.75m-7.27 0c-.41 0-.75-.34-.75-.75V3.3c0-.41.34-.75.75-.75s.75.34.75.75v2.58c0 .41-.34.75-.75.75M11.995 10.51a.98.98 0 0 1-.98-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.97-.97.97zM15.255 12.17a.97.97 0 0 1-.97-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.97-.98.97zM8.745 12.17a.98.98 0 0 1-.98-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.97-.97.97zM9.835 17.46c-.31 0-.61-.06-.89-.25-.39-.25-.63-.68-.72-1.27-.12-.77.13-1.57.71-2.25.75-.88 1.94-1.43 3.1-1.43 2.02 0 3.81 1.59 3.83 3.4 0 .66-.18 1.16-.56 1.46-.61.49-1.41.3-2.18.12-.38-.09-.77-.18-1.09-.18-.27 0-.62.09-.97.19-.39.1-.81.22-1.23.22zm2.19-3.7c-.72 0-1.48.36-1.95.91-.17.2-.44.6-.37 1.04.03.2.08.26.08.26.12.03.6-.1.89-.18.42-.11.89-.24 1.35-.24.5 0 1 .12 1.44.22.28.07.67.15.87.16 0-.05.02-.13.02-.26 0-.89-1.03-1.91-2.33-1.91"
    />
  </Svg>
);
export default IconlystPetsCalendarOutline;
