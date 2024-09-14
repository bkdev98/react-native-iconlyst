import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingHeartTwoTone = ({
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
      d="M7.356 3.743a6.7 6.7 0 0 1 1.609-.27c1.343 0 2.575.462 3.535 1.231a5.64 5.64 0 0 1 3.536-1.231c.535 0 1.068.099 1.6.27 3.333 1.073 4.53 4.702 3.513 7.877-1.582 5.03-8.648 8.907-8.648 8.907S5.49 16.71 3.852 11.62c-1.016-3.175.171-6.804 3.504-7.877"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 11.093c-1.115 0-2.02-1-2.02-2.233 0-1.673.787-3.168 2.02-4.156 1.235.988 2.021 2.483 2.021 4.156 0 1.233-.905 2.233-2.02 2.233"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingHeartTwoTone;
