import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCheckCompleteBold = ({
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
      d="M10.344 20.25a1 1 0 0 0 2 0V3.75a1 1 0 0 0-2 0zM15.508 14.072a1 1 0 0 1-1-1V6.709a1 1 0 0 1 2 0v6.363a1 1 0 0 1-1 1M18.673 11.685a1 1 0 0 0 2 0V9.913a1 1 0 0 0-2 0zM16.424 19.53a.997.997 0 0 0 1.414 0l3.854-3.854a.999.999 0 1 0-1.414-1.414l-3.147 3.146-.834-.834a.999.999 0 1 0-1.414 1.414zM6.18 17.29a1 1 0 0 0 2 0V6.84a1 1 0 0 0-2 0zM3.015 15.087a1 1 0 0 1-1-1v-3.91a1 1 0 0 1 2 0v3.91a1 1 0 0 1-1 1"
    />
  </Svg>
);
export default IconlystSongsWaveCheckCompleteBold;
