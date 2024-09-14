import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceMinusBroken = ({
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
      d="M21.5 16.198A2.2 2.2 0 0 0 19.302 14h-2.604a2.2 2.2 0 0 0-2.198 2.198v2.604c0 1.214.984 2.198 2.198 2.198h2.604a2.2 2.2 0 0 0 2.198-2.198M20.768 6.496h-5.536M5.698 21A2.2 2.2 0 0 1 3.5 18.802v-2.604C3.5 14.984 4.484 14 5.698 14h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 8.302 21M3.5 7.802C3.5 9.016 4.484 10 5.698 10h2.604A2.2 2.2 0 0 0 10.5 7.802V5.198A2.2 2.2 0 0 0 8.302 3H5.698A2.2 2.2 0 0 0 3.5 5.198"
    />
  </Svg>
);
export default IconlystGridInterfaceMinusBroken;
