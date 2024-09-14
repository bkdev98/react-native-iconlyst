import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBold = ({
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
      d="m12.57 2.1 6.638 2.227a1.81 1.81 0 0 1 1.25 1.695l.042 6.64a8.24 8.24 0 0 1-2.065 5.496c-.618.702-1.41 1.305-2.422 1.844l-3.568 1.908a.78.78 0 0 1-.717.004L8.127 20.05c-1.023-.531-1.822-1.125-2.446-1.818a8.25 8.25 0 0 1-2.139-5.473L3.5 6.124a1.81 1.81 0 0 1 1.228-1.711l6.613-2.307c.392-.139.83-.142 1.23-.006m3.175 7.119a.77.77 0 0 0-1.068.006l-3.369 3.32-1.38-1.326a.77.77 0 0 0-1.067.007.72.72 0 0 0 .007 1.04l1.916 1.843a.76.76 0 0 0 .535.212.76.76 0 0 0 .533-.219l3.899-3.844a.72.72 0 0 0-.006-1.04"
    />
  </Svg>
);
export default IconlystShieldDoneBold;
