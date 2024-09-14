import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEBikeDisconnectLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m3.25 3.885 10.452 10.452 2.183 2.182 5.365 5.366M14.22 14.824a3.543 3.543 0 1 1 3.487 2.914 2.2 2.2 0 0 1-.703-.117M16.122 8.907H8.395"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.708 14.052-2.74-9.13 2.236-.95M9.004 6.406H5.995M9.916 20.607h-.35c-3.488 0-6.316-2.256-6.316-5.744a4.21 4.21 0 0 1 2.268-3.737"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.297 21.798h-1.19a1.19 1.19 0 0 1 0-2.381h1.19m0 2.38v-2.38m0 2.38h1.387m-1.387-2.38h1.387M7.459 17.67c1.263 0 2.37-.668 2.989-1.67M7.186 14.052q.42-.416.736-.813"
    />
  </Svg>
);
export default IconlystEBikeDisconnectLight;
