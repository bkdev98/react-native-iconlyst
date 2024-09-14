import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessor3Bold = ({
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
      d="M13.376 9.813h-2.752c-.706 0-.811.559-.811.892v2.593c0 .331.105.888.81.888h2.753c.703 0 .809-.557.809-.888v-2.593c0-.333-.106-.892-.81-.892"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.68 13.3c0 1.4-.94 2.39-2.3 2.39h-2.76c-1.36 0-2.31-.99-2.31-2.39v-2.59c0-1.41.95-2.4 2.31-2.4h2.76c1.36 0 2.3.99 2.3 2.4zm5.32.33h-1.53v-3.26H21a.749.749 0 1 0 0-1.5h-1.53c-.03-2.6-1.71-4.35-4.2-4.35h-.13V3a.749.749 0 1 0-1.5 0v1.52h-3.28V3a.749.749 0 1 0-1.5 0v1.52h-.13c-2.5 0-4.18 1.75-4.2 4.35H3a.749.749 0 1 0 0 1.5h1.52v3.26H3a.749.749 0 1 0 0 1.5h1.53c.02 2.6 1.7 4.35 4.2 4.35h.13V21a.749.749 0 1 0 1.5 0v-1.52h3.28V21a.749.749 0 1 0 1.5 0v-1.52h.13c2.5 0 4.18-1.75 4.2-4.35H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessor3Bold;
