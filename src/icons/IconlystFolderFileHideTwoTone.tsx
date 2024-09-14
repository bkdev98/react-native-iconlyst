import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileHideTwoTone = ({
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
      d="M4.053 16.042V8.056C4.053 4.878 5.218 3 8.406 3h1.78a2.02 2.02 0 0 1 1.63.81l.809 1.077c.383.516.988.81 1.629.819h1.073"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.972 6.078c1.548.65 2.171 2.146 2.171 4.495l-.026 4.425c0 3.186-1.879 5.065-5.065 5.065H9.126c-1.308 0-2.394-.312-3.222-.918M4.053 21 21.396 3.656"
    />
  </Svg>
);
export default IconlystFolderFileHideTwoTone;