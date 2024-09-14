import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRainLight = ({
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
      d="M4.914 18.195a9.14 9.14 0 0 1-1.8-5.458 9.17 9.17 0 0 1 6.647-8.821c.05-.015.092.04.068.086a8.29 8.29 0 0 0 1.467 9.73 8.27 8.27 0 0 0 9.73 1.458c.046-.025.1.017.086.068-1.099 3.843-4.64 6.656-8.82 6.656a9.2 9.2 0 0 1-1.984-.215"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.938 18.246c-1.009.009-1.824.686-1.824 1.84 0 .746.445 1.389 1.083 1.677.269.11.536.15.74.15h4.352c.204 0 .472-.039.744-.148a1.84 1.84 0 0 0 1.081-1.68c0-1.153-.814-1.83-1.823-1.84 0-.725-.57-2.177-2.176-2.177-1.608 0-2.177 1.452-2.177 2.177"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.887 8.383.491-1.5m-4.71 2.007.317-1.216m7.813 1.216.317-1.216m-1.256-2.138.484-1.622m-5.144 1.622.483-1.622"
    />
  </Svg>
);
export default IconlystMoonRainLight;
