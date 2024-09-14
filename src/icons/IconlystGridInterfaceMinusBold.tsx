import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceMinusBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.802 13.5h-2.604a2.7 2.7 0 0 0-2.698 2.698v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604a2.7 2.7 0 0 0-2.698-2.698M14.733 7.246h5.535a.75.75 0 0 0 0-1.5h-5.535a.75.75 0 0 0 0 1.5M7.802 13.5H5.198A2.7 2.7 0 0 0 2.5 16.198v2.604A2.7 2.7 0 0 0 5.198 21.5h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604A2.7 2.7 0 0 0 7.802 13.5M7.802 2.5H5.198A2.7 2.7 0 0 0 2.5 5.198v2.604A2.7 2.7 0 0 0 5.198 10.5h2.604A2.7 2.7 0 0 0 10.5 7.802V5.198A2.7 2.7 0 0 0 7.802 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceMinusBold;