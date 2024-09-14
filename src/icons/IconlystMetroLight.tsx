import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetroLight = ({
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
      d="m5.178 6.69-.9 6.564a3.598 3.598 0 0 0 3.57 4.098h8.805a3.61 3.61 0 0 0 3.453-2.576 3.6 3.6 0 0 0 .117-1.522l-.9-6.564a3.61 3.61 0 0 0-3.57-3.122H8.778a3.6 3.6 0 0 0-3.6 3.122M7.907 17.352l-2.886 4.216M16.585 17.352l2.885 4.216M18.482 20.12H6.009M4.845 9.702h14.801"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.116 13.673v.048m-7.725-.048v.048m.195-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0m7.719 0a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystMetroLight;
