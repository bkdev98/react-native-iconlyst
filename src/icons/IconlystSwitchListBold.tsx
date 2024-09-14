import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchListBold = ({
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
      d="M20 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2M14.92 18H17c2.206 0 4-1.794 4-4s-1.794-4-4-4H4a1 1 0 1 0 0 2h13c1.103 0 2 .897 2 2s-.897 2-2 2h-2.08l.293-.291a.999.999 0 1 0-1.412-1.416l-1.978 1.97a1 1 0 0 0-.323.738c0 .266.106.52.294.708l2.007 2a1 1 0 1 0 1.412-1.416z"
    />
    <Path fill={props.color} d="M4 18h5a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2" />
  </Svg>
);
export default IconlystSwitchListBold;
