import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessTwoTone = ({
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
      d="M21.426 20.15A15.866 15.866 0 0 0 9.533 3.255C7 2.612 5.949 6.603 8.565 7.225a11.785 11.785 0 0 1 8.772 10.01c.31 2.575-3.718 3.171-4.052.548a7.68 7.68 0 0 0-6.878-6.797"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.257 18.662a2.384 2.384 0 1 1-4.746-.461 2.384 2.384 0 0 1 4.746.461"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWirelessTwoTone;
