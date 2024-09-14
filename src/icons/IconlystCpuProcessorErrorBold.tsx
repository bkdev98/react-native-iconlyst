import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorErrorBold = ({
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
      d="M21 13.63h-1.52v-1.49a.31.31 0 0 0-.3-.307 6.33 6.33 0 0 1-2.993-.888c-.211-.127-.497.018-.497.265v2.09c0 1.4-.95 2.39-2.31 2.39h-2.75c-1.36 0-2.32-.99-2.32-2.39v-2.59c0-1.41.96-2.4 2.32-2.4h2.75c.167 0 .306-.189.24-.343-.407-.96-.578-2.048-.441-3.084a.317.317 0 0 0-.307-.363H10.37V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.51 0-4.19 1.75-4.21 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.53c.02 2.6 1.7 4.35 4.21 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.27V21c0 .41.34.75.75.75s.75-.34.75-.75v-1.52h.13c2.5 0 4.18-1.75 4.2-4.35H21c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.63 9.81c-.74 0-.82.63-.82.9v2.59c0 .33.11.89.82.89h2.75c.7 0 .81-.56.81-.89v-2.59c0-.34-.11-.9-.81-.9zM17.535 8.84h.03c.4 0 .73-.34.75-.74a.74.74 0 0 0-.71-.79c-.38-.01-.76.29-.78.71l-.01.06c-.02.41.3.73.72.76M17.565 6.43c.41 0 .75-.33.75-.75V3c0-.42-.34-.75-.75-.75-.42 0-.75.33-.75.75v2.68c0 .42.33.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorErrorBold;
