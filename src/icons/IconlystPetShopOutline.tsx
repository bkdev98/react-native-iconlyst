import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetShopOutline = ({
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
      d="M7.7 17.421c-1.29 0-2.38-1.01-2.49-2.3l-.89-10.58-1.45-.25a.75.75 0 1 1 .26-1.48l2.02.35c.34.06.59.34.62.68l.94 11.16c.04.52.48.92 1 .92h10.62c.5 0 .92-.37.99-.86l.92-6.38a.6.6 0 0 0-.1-.41.53.53 0 0 0-.36-.22h-1.59c-.41 0-.75-.34-.75-.75s.34-.79.75-.75c1.69 0 1.75.01 1.81.02.53.08 1.01.36 1.34.8s.47.98.39 1.52l-.92 6.38a2.515 2.515 0 0 1-2.47 2.15H7.7M7.28 21.801a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 1 1 0 2.46M18.3 21.801a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 1 1 0 2.46"
    />
    <Path
      fill={props.color}
      d="M11.99 6.681a.982.982 0 0 1-.7-1.67c.18-.19.43-.29.69-.29.54 0 .98.44.98.97s-.44.98-.97.98zM15.25 8.341a.97.97 0 0 1-.97-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.97-.98.97zM8.74 8.341a.98.98 0 0 1-.98-.97c0-.25.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.97s-.44.97-.97.97zM9.83 13.64c-.31 0-.61-.06-.89-.25-.39-.25-.63-.68-.72-1.27-.12-.77.13-1.57.71-2.25.75-.88 1.94-1.43 3.1-1.43 2.03 0 3.81 1.59 3.83 3.4 0 .66-.18 1.16-.56 1.46-.61.49-1.41.3-2.18.12-.38-.09-.77-.18-1.09-.18-.27 0-.62.09-.97.19-.39.1-.82.22-1.23.22zm2.19-3.7c-.72 0-1.48.36-1.95.91-.17.2-.44.6-.37 1.04.03.2.08.26.08.26.11.03.6-.1.9-.18.42-.11.89-.24 1.35-.24.5 0 1 .12 1.44.22.28.07.67.16.87.16 0-.05.02-.13.02-.26 0-.89-1.03-1.91-2.33-1.91z"
    />
  </Svg>
);
export default IconlystPetShopOutline;
