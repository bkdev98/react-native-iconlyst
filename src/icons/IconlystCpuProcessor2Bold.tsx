import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor2Bold = ({
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
      d="M13.57 9.545v1.19a.75.75 0 1 1-1.5 0V9.537h-1.575c-.864 0-.958.731-.958 1.045v2.835c0 .313.094 1.041.958 1.041h.098v-1.196a.75.75 0 0 1 1.5 0v1.196h1.411c.861 0 .954-.728.954-1.04v-2.836c0-.305-.094-.998-.888-1.038"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.96 13.42c0 1.49-1.01 2.54-2.46 2.54h-3c-1.45 0-2.46-1.05-2.46-2.54v-2.84c0-1.5 1.01-2.54 2.46-2.54h3c1.45 0 2.46 1.04 2.46 2.54zm5.04.21h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.03-2.6-1.71-4.35-4.2-4.35h-.13V3a.749.749 0 1 0-1.5 0v1.52h-3.28V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.18 1.75-4.2 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.53c.02 2.6 1.7 4.35 4.2 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.28V21a.749.749 0 1 0 1.5 0v-1.52h.13c2.5 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessor2Bold;
