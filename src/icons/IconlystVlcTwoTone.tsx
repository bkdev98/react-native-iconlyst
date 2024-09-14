import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVlcTwoTone = ({
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
      d="m13.88 4.837 3.257 9.305a2.01 2.01 0 0 1-1.072 2.499 10.04 10.04 0 0 1-8.13 0 2.01 2.01 0 0 1-1.072-2.499l3.257-9.305a1.99 1.99 0 0 1 3.76 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.247 11.602c-2.696 1.638-5.788 1.595-8.488 0M14.766 7.418c-1.811.916-3.722.913-5.533 0M6.761 14.5H5.572a2 2 0 0 0-1.923 1.45l-.571 2A2 2 0 0 0 5 20.5h13.998a2 2 0 0 0 1.923-2.55l-.572-2a2 2 0 0 0-1.923-1.45h-1.201"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVlcTwoTone;
