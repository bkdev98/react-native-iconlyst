import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceAddPlusBold = ({
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
      d="M18.794 13.51H16.19a2.7 2.7 0 0 0-2.698 2.698v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604a2.7 2.7 0 0 0-2.698-2.698M14.222 7.256h2.52V9.77a.75.75 0 1 0 1.5 0V7.256h2.516a.75.75 0 0 0 0-1.5h-2.516V3.24a.75.75 0 0 0-1.5 0v2.516h-2.52a.75.75 0 0 0 0 1.5M7.794 2.51H5.19a2.7 2.7 0 0 0-2.698 2.698v2.604A2.7 2.7 0 0 0 5.19 10.51h2.604a2.7 2.7 0 0 0 2.698-2.698V5.208A2.7 2.7 0 0 0 7.794 2.51M7.794 13.51H5.19a2.7 2.7 0 0 0-2.698 2.698v2.604A2.7 2.7 0 0 0 5.19 21.51h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604a2.7 2.7 0 0 0-2.698-2.698"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceAddPlusBold;
