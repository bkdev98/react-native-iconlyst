import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorRefresh2Bulk = ({
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
      d="M21 13.63h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.02-2.6-1.71-4.35-4.2-4.35h-.13V3a.749.749 0 1 0-1.5 0v1.52h-3.28V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.52c.02 2.6 1.71 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.28V21a.749.749 0 1 0 1.5 0v-1.52h.13c2.49 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 15.71c.91 0 1.78-.33 2.46-.93.31-.27.34-.74.06-1.05a.747.747 0 0 0-1.06-.07c-.4.36-.92.55-1.46.55A2.21 2.21 0 0 1 9.79 12a.749.749 0 1 0-1.5 0c0 2.05 1.66 3.71 3.71 3.71M14.21 12a.749.749 0 1 0 1.5 0c0-2.05-1.66-3.71-3.71-3.71-.91 0-1.78.33-2.46.92-.31.28-.34.75-.06 1.06.27.31.74.34 1.06.07.4-.36.92-.55 1.46-.55 1.22 0 2.21.99 2.21 2.21"
    />
  </Svg>
);
export default IconlystCpuProcessorRefresh2Bulk;
