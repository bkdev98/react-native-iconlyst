import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBulbBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M19.705 14.79c0 4.24-3.46 7.7-7.7 7.7-4.25 0-7.71-3.46-7.71-7.7 0-3.46 2.3-6.4 5.45-7.37a7.63 7.63 0 0 1 4.51 0c3.15.96 5.45 3.9 5.45 7.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.503 14.957a.75.75 0 0 1-.75-.75 2.177 2.177 0 0 0-2.174-2.174.75.75 0 0 1 0-1.5 3.68 3.68 0 0 1 3.674 3.674.75.75 0 0 1-.75.75M14.255 6.67v.75a7.629 7.629 0 0 0-4.51 0v-.75c0-.98.63-1.81 1.5-2.12V3.49c0-.42.34-.75.75-.75.42 0 .75.33.75.75v1.06a2.25 2.25 0 0 1 1.51 2.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBulbBulk;
