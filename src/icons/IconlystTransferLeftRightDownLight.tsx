import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftRightDownLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.929 8.606 2.204 2.863 2.088-1.607.029 7.957-7.685-2.064 2.088-1.607-3.306-4.295 2.088-1.608L4.75 6.181l.03 7.957 2.087-1.607 2.204 2.863"
    />
  </Svg>
);
export default IconlystTransferLeftRightDownLight;
