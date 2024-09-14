import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHideLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.553 16.042V8.056C3.553 4.878 4.718 3 7.906 3h1.78a2.02 2.02 0 0 1 1.63.81l.809 1.077c.383.516.988.81 1.629.819h1.073M18.472 6.078c1.548.65 2.171 2.146 2.171 4.495l-.026 4.425c0 3.186-1.879 5.065-5.065 5.065H8.626c-1.308 0-2.394-.312-3.222-.918M3.553 21 20.896 3.656"
    />
  </Svg>
);
export default IconlystFolderFileHideLight;
