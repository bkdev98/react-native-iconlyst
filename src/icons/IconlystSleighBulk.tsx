import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleighBulk = ({
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
      d="M21.25 20.925h-2.29l-.94-2.48c-.13.04-.27.06-.41.06h-1.17l.92 2.42h-6.9l.92-2.42H9.77l-.92 2.42H4.83c-.62 0-1.15-.42-1.29-1.02-.11-.45.02-.89.34-1.18.34-.31.82-.37 1.34-.18a.75.75 0 1 0 .51-1.41c-1.04-.38-2.1-.2-2.85.47-.73.65-1.04 1.67-.8 2.65a2.82 2.82 0 0 0 2.75 2.17h16.42a.749.749 0 1 0 0-1.5M9.74 12.536c.34.93 1.06 1.46 1.97 1.46h.01c1.06-.01 2.01-.74 2.41-1.86.66-1.5 1.39-2.7 2.2-3.59l-2.3-2.27c-2.41.5-3.78 1.65-4.52 2.6-.48.6-.81 1.28-.98 1.95.52.4.93.97 1.21 1.71M19.5 6.655c.37-.55.89-1.02 1.13-1.21.11-.09.18-.22.19-.36 0-.14-.05-.28-.15-.38-.69-.7-1.49-.72-2.13-.73-.74-.02-1.23-.04-1.63-.88a.53.53 0 0 0-.34-.28c-.14-.03-.3 0-.42.09-.74.57-1.11 1.53-1.29 2.32l2.43 2.4c.69-.53 1.43-.85 2.21-.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.47 7.255c-.23-.4-.63-.64-1.1-.65-.05-.01-.1-.01-.15-.01q-.36 0-.72.06c-.76.12-1.48.42-2.15.93l-2.36-2.29a.697.697 0 0 0-.99.01c-.27.28-.26.72.01.99l2.32 2.25c-.81.89-1.54 2.09-2.2 3.59-.4 1.12-1.35 1.85-2.41 1.86h-.01c-.91 0-1.63-.53-1.97-1.46-.28-.74-.69-1.31-1.21-1.71-.66-.5-1.51-.71-2.5-.6-.45.05-.82.31-1.04.7a1.6 1.6 0 0 0-.01 1.46l2.63 5.22c.28.55.84.9 1.46.9h8.54c.14 0 .28-.02.41-.06.77-.19 1.34-.91 1.35-1.77.02-1.19.26-4.33 2.11-7.84.27-.51.26-1.11-.01-1.58"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSleighBulk;
