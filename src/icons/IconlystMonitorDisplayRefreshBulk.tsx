import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRefreshBulk = ({
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
      d="M7.03 2.654h9.94c2.5 0 4.53 2.04 4.53 4.53v5.46c0 2.5-2.03 4.53-4.53 4.53H7.03c-2.5 0-4.53-2.03-4.53-4.53v-5.46c0-2.49 2.03-4.53 4.53-4.53"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m9.043 17.177-.434 2.668H7.056a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668h-3.743l.433-2.668zM15.49 8.633c.003-.027.016-.051.016-.08V6.76a.75.75 0 0 0-1.5 0v.06a4.03 4.03 0 0 0-2.167-.621 3.67 3.67 0 0 0-3.182 1.84.75.75 0 1 0 1.303.744 2.14 2.14 0 0 1 1.879-1.084c.327 0 .613.064.869.156a.746.746 0 0 0 .253 1.449h1.754c.015 0 .027.01.042.01a.74.74 0 0 0 .385-.106c.045-.027.074-.068.111-.102q.024-.02.047-.042a.7.7 0 0 0 .117-.173q.02-.04.037-.08a.7.7 0 0 0 .036-.178M11.838 13.524a3.67 3.67 0 0 0 3.171-1.83.75.75 0 1 0-1.298-.75 2.17 2.17 0 0 1-1.873 1.08c-.244 0-.467-.064-.675-.151a.74.74 0 0 0 .626-.725.75.75 0 0 0-.75-.75H9.244c-.033 0-.062.015-.094.019q-.021.004-.043.009a.7.7 0 0 0-.234.084c-.006.004-.013.003-.02.007-.01.006-.015.017-.025.023a.7.7 0 0 0-.166.155q-.027.035-.048.07a.7.7 0 0 0-.102.297c-.004.03-.018.055-.018.086v1.669c0 .414.336.75.75.75a.74.74 0 0 0 .727-.634c.5.33 1.126.59 1.867.59"
    />
  </Svg>
);
export default IconlystMonitorDisplayRefreshBulk;
