import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpod1TwoTone = ({
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
      d="M6.084 8.748v1.234m-2.584.383c0 .406.12.808.366 1.132a3.99 3.99 0 0 0 3.16 1.554h1.017v5.576a1.41 1.41 0 0 0 2.82 0V9.544c0-2.142-2.079-4-4.222-3.9a3.71 3.71 0 0 0-2.774 1.47A1.88 1.88 0 0 0 3.5 8.249z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.918 6.109v1.235m2.582.383c0 .405-.12.807-.366 1.131a3.99 3.99 0 0 1-3.16 1.554h-1.017v5.576a1.41 1.41 0 0 1-2.82 0V6.905c0-2.143 2.079-4 4.223-3.901a3.72 3.72 0 0 1 2.774 1.472c.245.324.366.727.366 1.133z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirpod1TwoTone;
