import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetClipboardCheckOutline = ({
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
      d="M14.33 7.34H9.68a2.11 2.11 0 0 1-2.11-2.11v-.57c0-1.16.95-2.11 2.11-2.11h4.65c1.16 0 2.11.94 2.11 2.11v.57c0 1.16-.95 2.11-2.11 2.11M9.68 4.06c-.33 0-.61.27-.61.61v.57c0 .33.27.61.61.61h4.65c.33 0 .61-.27.61-.61v-.57c0-.33-.27-.61-.61-.61z"
    />
    <Path
      fill={props.color}
      d="M15.68 22.05H8.32c-2.48 0-4.5-2.02-4.5-4.51v-8.9c0-2.48 2.02-4.5 4.5-4.5.41 0 .75.34.75.75s-.34.75-.75.75c-1.66 0-3 1.35-3 3v8.9a3.01 3.01 0 0 0 3 3.01h7.36c1.66 0 3-1.35 3-3.01v-8.9c0-1.66-1.35-3-3-3-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.48 0 4.5 2.02 4.5 4.5v8.9c0 2.48-2.02 4.51-4.5 4.51"
    />
    <Path
      fill={props.color}
      d="M12 11.201a.98.98 0 0 1-.98-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.98s-.44.97-.97.97M15.26 12.86c-.54 0-.97-.44-.97-.98 0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.98-.98.98zM8.75 12.86a.982.982 0 0 1-.7-1.67c.18-.19.43-.29.69-.29.54 0 .98.44.98.97s-.44.98-.97.98zM9.84 17.94c-.31 0-.61-.06-.89-.25-.39-.25-.63-.68-.72-1.27-.12-.77.13-1.57.71-2.25.75-.88 1.94-1.43 3.1-1.43 2.02 0 3.81 1.59 3.83 3.4 0 .66-.18 1.16-.56 1.46-.61.49-1.41.3-2.18.12-.38-.09-.77-.18-1.09-.18-.27 0-.62.09-.97.19-.39.11-.82.22-1.23.22zm2.19-3.7c-.72 0-1.49.36-1.96.91-.17.2-.44.6-.37 1.04.03.2.08.26.08.26.11.03.6-.1.89-.18.42-.11.89-.24 1.35-.24.5 0 1 .12 1.44.23.28.07.66.15.87.16 0-.05.02-.13.02-.26 0-.89-1.03-1.91-2.33-1.91z"
    />
  </Svg>
);
export default IconlystPetClipboardCheckOutline;
