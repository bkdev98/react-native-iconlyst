import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignLeftTwoTone = ({
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
      d="M3.5 18.802v-2.604C3.5 14.984 4.484 14 5.698 14h13.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 19.302 21H5.698A2.2 2.2 0 0 1 3.5 18.802"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 7.802V5.198C3.5 3.984 4.484 3 5.698 3h6.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 12.302 10H5.698A2.2 2.2 0 0 1 3.5 7.802"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAlignLeftTwoTone;
