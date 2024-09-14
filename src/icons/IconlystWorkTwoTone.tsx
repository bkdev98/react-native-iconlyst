import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M2.804 15.477s.142 1.738.175 2.286c.044.735.328 1.556.802 2.126.67.808 1.457 1.093 2.51 1.095 1.236.002 10.231.002 11.468 0 1.052-.002 1.84-.287 2.51-1.095.473-.57.757-1.391.802-2.126.032-.548.174-2.286.174-2.286"
        opacity={0.4}
      />
      <Path d="M8.496 5.33v-.372c0-1.22.988-2.208 2.208-2.208h2.582c1.219 0 2.208.989 2.208 2.209l.001.37M11.995 16.678v-1.294M2.75 8.39v3.466c1.918 1.265 4.216 2.151 6.738 2.502a2.584 2.584 0 0 1 2.502-1.908c1.188 0 2.2.807 2.483 1.918 2.532-.35 4.839-1.237 6.767-2.512V8.39a3.05 3.05 0 0 0-3.057-3.058H5.817A3.06 3.06 0 0 0 2.75 8.39" />
    </G>
  </Svg>
);
export default IconlystWorkTwoTone;
