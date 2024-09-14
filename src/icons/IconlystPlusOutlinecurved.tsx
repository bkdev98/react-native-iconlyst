import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlusOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.037 8.713a.75.75 0 0 1 .75.75v7.148a.75.75 0 1 1-1.5 0V9.463a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.709 13.037a.75.75 0 0 1 .75-.75h7.156a.75.75 0 0 1 0 1.5H8.459a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.96 5.96c-1.299 1.3-1.91 3.467-1.91 7.077s.611 5.777 1.91 7.076c1.3 1.3 3.467 1.91 7.077 1.91s5.777-.61 7.076-1.91c1.3-1.299 1.91-3.467 1.91-7.076 0-3.61-.61-5.778-1.91-7.077s-3.467-1.91-7.076-1.91c-3.61 0-5.777.611-7.076 1.91M3.9 4.9c1.744-1.744 4.444-2.35 8.137-2.35 3.692 0 6.393.606 8.137 2.35s2.35 4.444 2.35 8.137-.606 6.393-2.35 8.137-4.444 2.35-8.137 2.35-6.393-.606-8.137-2.35-2.35-4.444-2.35-8.137S2.156 6.644 3.9 4.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlusOutlinecurved;
