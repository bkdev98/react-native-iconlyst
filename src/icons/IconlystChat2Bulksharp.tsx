import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChat2Bulksharp = ({
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
      d="M19.156 5.258a9.66 9.66 0 0 0-6.876-2.845A9.66 9.66 0 0 0 5.402 5.26a9.66 9.66 0 0 0-2.85 6.885c.003 3.351-.048 9.194-.048 9.194l-.004.51.508-.005c.058 0 5.81-.052 9.06.02l.222.001a9.63 9.63 0 0 0 6.866-2.849c3.792-3.793 3.792-9.964 0-13.757"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.787 13.27H15.19v-1.5h1.598zM13.053 13.27h-1.599v-1.5h1.6zM9.32 13.27h-1.6v-1.5h1.6z"
    />
  </Svg>
);
export default IconlystChat2Bulksharp;
