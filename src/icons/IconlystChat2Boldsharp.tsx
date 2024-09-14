import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChat2Boldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.19 13.27h1.598v-1.5H15.19zm-3.735 0h1.598v-1.5h-1.599zm-3.735 0h1.6v-1.5h-1.6zm11.436-8.012a9.66 9.66 0 0 0-6.876-2.845A9.66 9.66 0 0 0 5.402 5.26a9.66 9.66 0 0 0-2.85 6.885c.003 3.351-.048 9.194-.048 9.194l-.004.51.508-.005c.058 0 5.81-.052 9.06.02l.222.001a9.63 9.63 0 0 0 6.866-2.849c3.792-3.793 3.792-9.964 0-13.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChat2Boldsharp;
