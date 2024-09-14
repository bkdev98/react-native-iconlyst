import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoaderTruckOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.441 16.31a.75.75 0 0 1 .75-.75h3.38a.75.75 0 0 1 0 1.5h-3.38a.75.75 0 0 1-.75-.75M8.418 11.08a.75.75 0 0 1 .75-.75h5.34a.75.75 0 0 1 0 1.5h-5.34a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.42 5.03h2.901a2.37 2.37 0 0 1 1.973 1.056l2.59 4.064a2.3 2.3 0 0 1 .417 1.38v3.12a.75.75 0 0 1-1.5 0v-3.153a.8.8 0 0 0-.172-.525l-2.594-4.069a.87.87 0 0 0-.714-.374h-2.79v7.9a.75.75 0 1 1-1.5 0v-8a1.4 1.4 0 0 1 1.378-1.4z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.22 11.69a.97.97 0 0 0-.97.97v2.92h1.11a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75v-3.67a2.47 2.47 0 0 1 2.47-2.47h2.56a.75.75 0 1 1 0 1.5zM16.24 11.51a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .64.36l2.701 4.43h.17a.75.75 0 0 1 0 1.5h-3.4770000000000003a2.75 2.75 0 0 1-2.002-.838 2.75 2.75 0 0 1-.782-1.946zm1.32 4.18.54-.522a1.25 1.25 0 0 0 .912.382h1.563l-2.006-3.29h-.829v2.018c-.003.331.125.65.356.887z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.047 11.544a.75.75 0 0 1 1.05-.157l2.34 1.73a.75.75 0 0 1-.893 1.206l-2.34-1.73a.75.75 0 0 1-.157-1.049M6.281 15.15a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32m-2.66 1.16a2.66 2.66 0 1 1 5.32 0 2.66 2.66 0 0 1-5.32 0M13.539 15.15a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32m-2.66 1.16a2.66 2.66 0 1 1 5.32 0 2.66 2.66 0 0 1-5.32 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoaderTruckOutline;
