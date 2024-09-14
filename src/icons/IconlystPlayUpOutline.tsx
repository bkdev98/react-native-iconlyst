import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayUpOutline = ({
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
      d="M3.787 17.943c-.66-.931-.668-2.103-.26-3.359l.017-.048C4.703 11.66 7.108 7.915 9.001 5.82c.882-1.002 1.883-1.64 3.002-1.64s2.119.638 3 1.64c1.895 2.094 4.3 5.84 5.458 8.715l.02.053c.396 1.251.39 2.424-.264 3.356-.638.909-1.76 1.392-3.126 1.604l-.032.005a44 44 0 0 1-5.057.262 44 44 0 0 1-5.092-.267c-1.359-.22-2.482-.701-3.123-1.606m3.344.122c1.565.175 3.192.258 4.868.251h.006a42 42 0 0 0 4.871-.251c1.19-.187 1.82-.564 2.113-.982.277-.393.383-1.01.07-2.014-1.095-2.703-3.396-6.285-5.172-8.245l-.008-.009c-.744-.848-1.37-1.134-1.876-1.134-.508 0-1.133.287-1.879 1.134l-.007.009c-1.775 1.96-4.077 5.544-5.172 8.248-.32 1.002-.211 1.613.066 2.004.297.419.932.795 2.12.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayUpOutline;
