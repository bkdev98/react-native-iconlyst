import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.676 2H7.333C3.93 2 2 3.929 2 7.333v9.334C2 20.07 3.929 22 7.333 22h9.343C20.08 22 22 20.071 22 16.667V7.333C22 3.93 20.08 2 16.676 2"
        opacity={0.4}
      />
      <Path d="M7.369 9.369a.833.833 0 0 0-.827.836v6.87a.83.83 0 0 0 1.662 0v-6.87a.835.835 0 0 0-.835-.836M12.035 6.089a.833.833 0 0 0-.826.836v10.15a.83.83 0 0 0 1.662 0V6.926a.835.835 0 0 0-.836-.836M16.64 12.996a.835.835 0 0 0-.836.835v3.245a.83.83 0 0 0 1.663 0V13.83a.833.833 0 0 0-.827-.835" />
    </G>
  </Svg>
);
export default IconlystChartBulk;
