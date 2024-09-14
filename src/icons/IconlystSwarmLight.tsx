import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwarmLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.648 19.423c-3.216 1.843-8.84-.072-8.84-.072s1.143-5.792 4.358-7.636c3.215-1.843 6.049-1.167 7.287.962s.41 4.903-2.805 6.746Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.42 13.305c.16 2.468 2.36 5.077 4.355 6.48M15.775 11.078c0 2.647 1.39 5.09 3.484 6.59"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.867 3.877c.789.296.904 1.248.784 1.97-.285 1.531-1.697 2.437-3.01 3.039-.425-1.126-.776-2.34-.284-3.511.375-.895 1.455-1.925 2.51-1.498ZM3.932 6.23c1.363-.873 3.305-.53 4.65.186 1.483.792 2.433 2.103 3.153 3.578-1.757.841-3.902 1.406-5.837.883C4.528 10.519 3 9.38 3 7.828c.002-.65.39-1.258.932-1.598Z"
    />
  </Svg>
);
export default IconlystSwarmLight;
