import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanSearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.037 8.232v7.53M13.64 8.232v3.026M16.942 8.232v1.793M10.338 15.672v-3.594M10.338 9.181v-.948M21 9.082V7.688c0-1.9-1.54-3.44-3.441-3.44h-1.11M3 9.082V7.688c0-1.9 1.54-3.44 3.44-3.44h1.11M3 14.918v1.393c0 1.9 1.54 3.44 3.44 3.44h1.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.39 12.938a3.049 3.049 0 1 1 0 6.097 3.049 3.049 0 0 1 0-6.097"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.465 18.219 1.534 1.531"
    />
  </Svg>
);
export default IconlystBarcodeScanSearchBroken;
