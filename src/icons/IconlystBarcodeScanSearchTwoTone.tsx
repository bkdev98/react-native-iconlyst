import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanSearchTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.538 8.234v7.53M14.142 8.234v3.026M17.443 8.234v1.793M10.839 15.672v-3.594M10.839 9.179v-.948"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.499 9.084V7.69c0-1.9-1.54-3.44-3.44-3.44h-1.11M3.5 9.084V7.69c0-1.9 1.54-3.44 3.44-3.44h1.11M3.5 14.918v1.393c0 1.9 1.54 3.44 3.44 3.44h1.14"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.891 12.938a3.049 3.049 0 1 1 0 6.097 3.049 3.049 0 0 1 0-6.097"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.966 18.219 21.5 19.75"
    />
  </Svg>
);
export default IconlystBarcodeScanSearchTwoTone;
