import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanNotFoundOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.893V8.47a.75.75 0 1 1-1.5 0V6.893a3.14 3.14 0 0 0-3.143-3.143H16.1a.75.75 0 0 1-.75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.893V8.47a.75.75 0 0 1-1.5 0V6.893A4.64 4.64 0 0 1 7.143 2.25h1.29a.75.75 0 0 1 0 1.5zM3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M21.25 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 0 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.652 8.595a.75.75 0 0 1 0 1.06l-5.743 5.743a.75.75 0 1 1-1.06-1.06l5.742-5.743a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.591 9.657a3.31 3.31 0 1 0-4.682 4.681 3.31 3.31 0 0 0 4.682-4.68M8.85 8.597a4.81 4.81 0 1 1 6.803 6.802 4.81 4.81 0 0 1-6.803-6.802"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanNotFoundOutline;
