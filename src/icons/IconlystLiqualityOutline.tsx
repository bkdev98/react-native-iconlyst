import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiqualityOutline = ({
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
      fill={props.color}
      d="M18.254 15.75a6.36 6.36 0 0 1-3.39-1.4 4.48 4.48 0 0 0-5.218 0 6.36 6.36 0 0 1-3.392 1.4 3.75 3.75 0 0 1 0-7.5 6.33 6.33 0 0 1 3.39 1.4 4.38 4.38 0 0 0 2.6.852h.009a4.38 4.38 0 0 0 2.6-.851 6.33 6.33 0 0 1 3.392-1.4 3.75 3.75 0 1 1 0 7.5zm-6-3.75a5.86 5.86 0 0 1 3.493 1.144c.711.602 1.58.986 2.505 1.106a2.25 2.25 0 0 0 0-4.5 4.9 4.9 0 0 0-2.506 1.109A5.86 5.86 0 0 1 12.256 12zm-6-2.25a2.25 2.25 0 1 0 0 4.5 4.84 4.84 0 0 0 2.507-1.108A5.86 5.86 0 0 1 12.254 12h-.006a5.86 5.86 0 0 1-3.49-1.142A4.9 4.9 0 0 0 6.255 9.75"
    />
  </Svg>
);
export default IconlystLiqualityOutline;
