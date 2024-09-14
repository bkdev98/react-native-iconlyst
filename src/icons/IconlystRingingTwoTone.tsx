import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingingTwoTone = ({
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
      d="M12.501 17.356c-4.745 0-6.94-.635-7.152-3.183 0-2.546 1.53-2.383 1.53-5.507 0-2.442 2.219-5.218 5.622-5.218s5.622 2.776 5.622 5.217c0 3.124 1.53 2.96 1.53 5.508-.212 2.557-2.407 3.183-7.152 3.183"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.484 20c.492.614 1.23 1 2.045 1 .825 0 1.562-.386 2.054-1M6.572 3.008a8.04 8.04 0 0 0-2.027 3.194M20.456 6.212A8.1 8.1 0 0 0 18.42 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingingTwoTone;
