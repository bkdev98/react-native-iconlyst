import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingingBroken = ({
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
      d="M6.88 8.666c0 3.124-1.531 2.961-1.531 5.507.212 2.548 2.407 3.183 7.152 3.183s6.94-.626 7.153-3.183c0-2.547-1.53-2.384-1.53-5.508 0-2.44-2.22-5.217-5.623-5.217-1.899 0-3.428.864-4.41 2.052M10.484 20c.492.614 1.23 1 2.045 1 .825 0 1.562-.386 2.054-1M6.572 3.008a8.04 8.04 0 0 0-2.027 3.194M20.456 6.212A8.1 8.1 0 0 0 18.42 3"
    />
  </Svg>
);
export default IconlystRingingBroken;
