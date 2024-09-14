import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSupportBold = ({
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
      fillRule="evenodd"
      d="M8.776 8.045a.31.31 0 0 0 .395.034 5.06 5.06 0 0 1 2.831-.873c1.05 0 2.019.328 2.832.873.123.083.29.071.394-.034l2.705-2.708a.292.292 0 0 0-.02-.436A9.44 9.44 0 0 0 12 2.824c-2.234 0-4.287.78-5.91 2.076a.292.292 0 0 0-.02.436zM19.429 6.42a.292.292 0 0 0-.436-.021l-2.704 2.707a.31.31 0 0 0-.033.394c.546.811.873 1.778.873 2.825 0 1.051-.329 2.02-.875 2.834a.31.31 0 0 0 .033.394l2.7 2.704a.292.292 0 0 0 .437-.02 9.44 9.44 0 0 0 2.076-5.912 9.44 9.44 0 0 0-2.071-5.905M7.717 15.554a.31.31 0 0 0 .033-.395 5.06 5.06 0 0 1-.876-2.834c0-1.047.328-2.014.874-2.824a.31.31 0 0 0-.033-.395L5.009 6.398a.292.292 0 0 0-.437.02A9.45 9.45 0 0 0 2.5 12.325c0 2.236.78 4.289 2.078 5.913.11.137.313.144.436.02zM15.227 16.614a.31.31 0 0 0-.395-.034 5.05 5.05 0 0 1-2.83.874 5.05 5.05 0 0 1-2.83-.873.31.31 0 0 0-.394.033l-2.703 2.704a.292.292 0 0 0 .021.436A9.44 9.44 0 0 0 12 21.824a9.45 9.45 0 0 0 5.907-2.07.292.292 0 0 0 .02-.437z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSupportBold;
