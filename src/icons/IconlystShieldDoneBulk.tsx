import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M12.087 22a.8.8 0 0 1-.36-.086L8.126 20.05c-1.022-.53-1.821-1.124-2.445-1.816a8.24 8.24 0 0 1-2.139-5.474L3.5 6.124a1.81 1.81 0 0 1 1.228-1.712l6.613-2.305c.392-.14.83-.142 1.23-.007l6.637 2.227a1.81 1.81 0 0 1 1.25 1.695l.042 6.64a8.24 8.24 0 0 1-2.066 5.496c-.617.702-1.41 1.305-2.421 1.845l-3.57 1.906a.76.76 0 0 1-.356.091"
        opacity={0.4}
      />
      <Path d="M11.32 14.32a.76.76 0 0 1-.536-.21l-1.917-1.844a.72.72 0 0 1-.006-1.04.77.77 0 0 1 1.068-.007l1.38 1.326 3.367-3.32a.77.77 0 0 1 1.068-.007c.297.286.3.752.007 1.04l-3.9 3.844a.76.76 0 0 1-.532.219" />
    </G>
  </Svg>
);
export default IconlystShieldDoneBulk;
