import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefreshBold = ({
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
      d="M14.46 14.78c-.68.6-1.55.93-2.46.93-2.05 0-3.71-1.66-3.71-3.71a.749.749 0 1 1 1.5 0c0 1.31 1.19 2.36 2.47 2.2l-.1-.05a.75.75 0 0 1-.33-1.01c.19-.37.64-.51 1.01-.33l1.46.74c.22.12.37.33.4.58.04.24-.06.49-.24.65m.5-2.03c-.41 0-.75-.34-.75-.75 0-1.31-1.18-2.36-2.47-2.2l.1.05c.37.19.51.64.33 1.01a.75.75 0 0 1-1.01.33l-1.46-.74a.8.8 0 0 1-.41-.58c-.03-.24.07-.49.25-.65.68-.6 1.55-.93 2.46-.93 2.05 0 3.71 1.66 3.71 3.71 0 .41-.33.75-.75.75m6.04.88h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.02-2.6-1.71-4.35-4.2-4.35h-.14V3a.749.749 0 1 0-1.5 0v1.52h-3.27V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.52c.02 2.6 1.71 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.27V21a.749.749 0 1 0 1.5 0v-1.52h.14c2.49 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorRefreshBold;
