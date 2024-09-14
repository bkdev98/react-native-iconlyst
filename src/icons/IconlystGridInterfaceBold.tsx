import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceBold = ({
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
      d="M7.698 14.571a1.258 1.258 0 0 0-2.182-.002l-2.64 4.613a1.257 1.257 0 0 0 1.092 1.882H9.25a1.26 1.26 0 0 0 1.091-1.884zM18.694 13.5H16.09a2.7 2.7 0 0 0-2.7 2.698v2.604a2.7 2.7 0 0 0 2.7 2.698h2.604a2.7 2.7 0 0 0 2.697-2.698v-2.604a2.7 2.7 0 0 0-2.697-2.698M16.4 9.133a1.26 1.26 0 0 0 1.713.466c.196-.111.358-.273.468-.466l2.643-4.613a1.26 1.26 0 0 0-1.091-1.883H14.85a1.258 1.258 0 0 0-1.09 1.883zM7.911 2.5H5.307A2.7 2.7 0 0 0 2.61 5.198v2.604A2.7 2.7 0 0 0 5.307 10.5h2.604a2.7 2.7 0 0 0 2.698-2.698V5.198A2.7 2.7 0 0 0 7.911 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceBold;
