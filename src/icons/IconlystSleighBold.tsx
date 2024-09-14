import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleighBold = ({
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
      fillRule="evenodd"
      d="M10.44 12.179c.17.45.52.98 1.27.98.75-.01 1.42-.54 1.71-1.36.73-1.66 1.714-3.172 2.574-4.112.01-.01.02-.02.02-.03l-1.76-1.74c-2.41.5-4.003 1.922-4.743 2.872-.3.38-.55.79-.72 1.22.06.04.13.08.19.13.65.5 1.13 1.18 1.46 2.04M16.83 6.949c.78-.61 1.64-.98 2.56-1.12.25-.05.52-.08.8-.08.18-.17.33-.31.44-.39.11-.09.18-.22.19-.36 0-.14-.05-.28-.15-.38-.69-.7-1.49-.72-2.13-.73-.74-.02-1.23-.04-1.63-.88a.53.53 0 0 0-.34-.28c-.14-.03-.3 0-.42.09-.74.57-1.11 1.53-1.29 2.32l1.89 1.87c.02-.02.05-.04.08-.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.46 21.012.92-2.42h5.06l.92 2.42zm10.79 0h-2.29l-.94-2.48c.77-.19 1.34-.91 1.35-1.77.02-1.19.26-4.33 2.11-7.84.27-.51.26-1.11-.01-1.58-.23-.4-.63-.64-1.1-.65-.05-.01-.1-.01-.15-.01q-.36 0-.72.06c-.78.12-1.52.44-2.21.97-.33.26-.66.56-.96.92-.81.89-1.54 2.09-2.2 3.59-.4 1.12-1.35 1.85-2.41 1.86h-.01c-.91 0-1.63-.53-1.97-1.46-.28-.74-.69-1.31-1.21-1.71-.66-.5-1.51-.71-2.5-.6-.45.05-.82.31-1.04.7a1.6 1.6 0 0 0-.01 1.46l2.63 5.22c.28.55.84.9 1.46.9h.7l-.92 2.42H4.83c-.62 0-1.15-.42-1.29-1.02-.11-.45.02-.89.34-1.18.34-.31.82-.37 1.34-.18a.75.75 0 1 0 .51-1.41c-1.04-.38-2.1-.2-2.85.47-.73.65-1.04 1.67-.8 2.65a2.82 2.82 0 0 0 2.75 2.17h16.42a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSleighBold;
