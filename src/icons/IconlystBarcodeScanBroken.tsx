import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanBroken = ({
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
      d="M7.037 8.232v7.53M13.64 8.232v7.53M16.944 8.232v3.594M16.944 14.726v.947M10.338 15.672v-3.594M10.338 9.181v-.948M21 9.081V7.688c0-1.9-1.54-3.44-3.44-3.44h-1.11M21 14.918v1.393c0 1.9-1.54 3.44-3.44 3.44h-1.14M3 9.081V7.688c0-1.9 1.54-3.44 3.44-3.44h1.11M3 14.918v1.393c0 1.9 1.54 3.44 3.44 3.44h1.14"
    />
  </Svg>
);
export default IconlystBarcodeScanBroken;
