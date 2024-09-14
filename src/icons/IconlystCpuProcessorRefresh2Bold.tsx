import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefresh2Bold = ({
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
      d="M14.46 14.78c-.68.6-1.55.93-2.46.93-2.05 0-3.71-1.66-3.71-3.71a.749.749 0 1 1 1.5 0c0 1.22.99 2.21 2.21 2.21.54 0 1.06-.19 1.46-.55.31-.27.79-.25 1.06.07.28.31.25.78-.06 1.05m.5-2.03c-.41 0-.75-.34-.75-.75 0-1.22-.99-2.21-2.21-2.21-.54 0-1.06.19-1.46.55-.32.27-.79.24-1.06-.07a.747.747 0 0 1 .06-1.06A3.75 3.75 0 0 1 12 8.29c2.05 0 3.71 1.66 3.71 3.71 0 .41-.33.75-.75.75m6.04.88h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.02-2.6-1.71-4.35-4.2-4.35h-.13V3a.749.749 0 1 0-1.5 0v1.52h-3.28V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.52c.02 2.6 1.71 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.28V21a.749.749 0 1 0 1.5 0v-1.52h.13c2.49 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorRefresh2Bold;
