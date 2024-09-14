import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardLight = ({
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
      d="M3 11.639V8.148C3 5.706 4.52 3.98 6.965 3.98h10.07C19.472 3.98 21 5.706 21 8.148v6.587c0 2.442-1.52 4.167-3.965 4.167h-3.749M21 9.277H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.68 13.082H5.569v3.023h2.177c.884 0 1.59-.759 1.505-1.66-.075-.786-.78-1.363-1.57-1.363M7.68 16.106H5.569v3.022h2.177c.884 0 1.59-.758 1.505-1.66-.075-.786-.78-1.363-1.57-1.363M7.14 20.02v-.891M7.14 13.079v-.892"
    />
  </Svg>
);
export default IconlystBitcoinCardLight;
