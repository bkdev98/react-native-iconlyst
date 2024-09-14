import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessRemoveErrorOutline = ({
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
      fillRule="evenodd"
      d="M13.734 5.92a14.53 14.53 0 0 0-9.929 3.902.75.75 0 1 1-1.022-1.097A16.02 16.02 0 0 1 13.734 4.42a.75.75 0 0 1 0 1.5m3.081.085a.75.75 0 0 1 1.06 0L19.32 7.45l1.444-1.444a.75.75 0 0 1 1.06 1.06L20.38 8.51l1.444 1.444a.75.75 0 1 1-1.06 1.06L19.32 9.57l-1.444 1.444a.75.75 0 0 1-1.06-1.06l1.443-1.444-1.444-1.444a.75.75 0 0 1 0-1.06m-3.08 4.238a10.17 10.17 0 0 0-6.983 2.751.75.75 0 0 1-1.028-1.092 11.67 11.67 0 0 1 8.01-3.159.75.75 0 0 1 0 1.5m-.002 4.398a5.8 5.8 0 0 0-3.981 1.575.75.75 0 0 1-1.028-1.093 7.3 7.3 0 0 1 5.009-1.982 7.34 7.34 0 0 1 5.02 1.982.75.75 0 1 1-1.028 1.093 5.84 5.84 0 0 0-3.993-1.575m-.002 4.318c-.399 0-.767.156-1.042.416a.75.75 0 0 1-1.03-1.09 3.014 3.014 0 0 1 4.143 0 .75.75 0 1 1-1.03 1.09 1.51 1.51 0 0 0-1.041-.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessRemoveErrorOutline;
