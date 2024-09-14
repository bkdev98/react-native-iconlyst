import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefreshBulk = ({
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
      d="M21 13.63h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.02-2.6-1.71-4.35-4.2-4.35h-.14V3a.749.749 0 1 0-1.5 0v1.52h-3.27V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.52c.02 2.6 1.71 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.27V21a.749.749 0 1 0 1.5 0v-1.52h.14c2.49 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 15.71c.91 0 1.78-.33 2.46-.93.18-.16.28-.41.24-.65a.76.76 0 0 0-.4-.58l-1.46-.74a.76.76 0 0 0-1.01.33.75.75 0 0 0 .33 1.01l.1.05c-1.28.16-2.47-.89-2.47-2.2a.749.749 0 1 0-1.5 0c0 2.05 1.66 3.71 3.71 3.71M14.21 12a.749.749 0 1 0 1.5 0c0-2.05-1.66-3.71-3.71-3.71-.91 0-1.78.33-2.46.93-.18.16-.28.41-.25.65a.8.8 0 0 0 .41.58l1.46.74a.75.75 0 1 0 .68-1.34l-.1-.05c1.29-.16 2.47.89 2.47 2.2"
    />
  </Svg>
);
export default IconlystCpuProcessorRefreshBulk;
