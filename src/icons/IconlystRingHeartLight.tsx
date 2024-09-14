import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingHeartLight = ({
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
      d="M15.536 3.473c-3.07 0-5.556 2.412-5.556 5.387 0 1.233.905 2.233 2.02 2.233 1.116 0 2.02-1 2.02-2.233 0-2.975-2.487-5.387-5.555-5.387a6.7 6.7 0 0 0-1.61.27C3.524 4.816 2.337 8.445 3.353 11.62c1.638 5.09 8.649 8.907 8.649 8.907s7.066-3.877 8.648-8.907c1.017-3.175-.18-6.804-3.513-7.877a5.3 5.3 0 0 0-1.6-.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingHeartLight;
