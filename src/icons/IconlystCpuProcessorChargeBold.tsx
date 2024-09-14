import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorChargeBold = ({
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
      d="m14.35 12.38-1.71 2.94c-.14.24-.39.38-.65.38-.13 0-.26-.04-.38-.1a.75.75 0 0 1-.27-1.03l1.06-1.82h-2.1c-.27 0-.52-.14-.65-.38a.72.72 0 0 1 0-.75l1.71-2.94a.75.75 0 0 1 1.02-.28c.36.21.48.67.27 1.03l-1.05 1.82h2.1c.27 0 .52.14.65.38.13.23.13.51 0 .75M21 13.63h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.02-2.6-1.71-4.35-4.2-4.35h-.13V3a.749.749 0 1 0-1.5 0v1.52h-3.28V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.52c.02 2.6 1.71 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.28V21a.749.749 0 1 0 1.5 0v-1.52h.13c2.49 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorChargeBold;
