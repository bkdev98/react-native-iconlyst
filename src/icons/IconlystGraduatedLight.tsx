import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedLight = ({
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
      d="m3 8.565 7.917-3.868a2.55 2.55 0 0 1 2.239 0l7.02 3.43c1.099.536 1.099 2.102 0 2.638l-7.02 3.43a2.55 2.55 0 0 1-2.239 0l-3.278-1.6a.558.558 0 0 0-.803.5v3.579c0 .936.55 1.808 1.42 2.15 2.485.974 4.96.987 7.425.006.865-.343 1.408-1.212 1.408-2.143v-4.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.451 16.495v-4.078c0-.876.638-1.623 1.505-1.759l3.752-.588"
    />
  </Svg>
);
export default IconlystGraduatedLight;
