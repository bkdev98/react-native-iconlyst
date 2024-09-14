import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthLight = ({
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
    <Circle
      cx={12.114}
      cy={12.613}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 12.509c2.443-.796 1.856 1.25 3.398 1.868.37.16 2.712 1.233 2.829.894.74-2.032 1.775-2.091 0-3.854-.92-1.291-.55-2.485-.55-2.485S10.2 7.341 10.24 6.81c.054-.718-.442-1.466-.9-2.537M21.032 11.999c-2.443.796-1.774-1.227-3.316-1.845-.369-.159-3.179-1.025-3.295-.687-.741 2.032-1.309 1.001.467 2.764 2.028 1.872-.31 2.604-.467 4.277-.147 1.569-1.439 2.973-.217 4.788"
    />
  </Svg>
);
export default IconlystEarthLight;
