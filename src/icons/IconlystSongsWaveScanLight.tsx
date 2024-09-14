import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveScanLight = ({
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
      d="M3.001 15.531v1.577a3.89 3.89 0 0 0 3.893 3.893H8.15M7.945 10.375v3.25M16.055 10.375v3.25M12 7.408v9.183M3 8.47V6.893A3.89 3.89 0 0 1 6.893 3h1.289M20.998 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289M20.999 8.47V6.893A3.89 3.89 0 0 0 17.106 3H15.85"
    />
  </Svg>
);
export default IconlystSongsWaveScanLight;
