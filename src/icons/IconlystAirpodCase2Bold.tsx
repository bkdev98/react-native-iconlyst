import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase2Bold = ({
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
      d="M3.698 7.317A4.817 4.817 0 0 1 8.515 2.5h6.97a4.817 4.817 0 0 1 4.817 4.817v.734h-3.474a1.895 1.895 0 0 0-1.785-1.256H8.957c-.822 0-1.523.523-1.785 1.256H3.698zM3.698 9.328v7.354A4.82 4.82 0 0 0 8.515 21.5h6.97a4.82 4.82 0 0 0 4.817-4.818V9.328h-3.475a1.895 1.895 0 0 1-1.784 1.257H8.957a1.9 1.9 0 0 1-1.785-1.257z"
    />
  </Svg>
);
export default IconlystAirpodCase2Bold;
