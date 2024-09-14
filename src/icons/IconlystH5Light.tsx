import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH5Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.265 19.28h2.117a2.118 2.118 0 0 0 0-4.236h-2.117v-4.235H21.5M3.5 6.574V19.28m8.47-12.706V19.28M3.5 12.927h8.47M10.93 19.28h2.081M10.93 6.574h2.081M2.46 19.28h2.082M2.459 6.574h2.082"
    />
  </Svg>
);
export default IconlystH5Light;
