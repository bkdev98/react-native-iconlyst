import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12.141 6.59a.72.72 0 0 0-.38.627v4.066H3.735A.726.726 0 0 0 3 12c0 .396.329.717.734.717h8.028v4.066c0 .262.145.502.38.627.233.127.52.119.746-.02l7.77-4.783A.71.71 0 0 0 21 12a.71.71 0 0 0-.343-.607l-7.77-4.783a.76.76 0 0 0-.746-.02"
    />
  </Svg>
);
export default IconlystArrowRight3Bold;
