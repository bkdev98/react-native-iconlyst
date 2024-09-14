import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSwapBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.327 20.64c1.232 0 1.998-.87 1.998-2.101v-3.322c0-1.23-.766-2.1-1.998-2.1H5.249c-1.228 0-1.999.87-1.999 2.1v3.322c0 1.23.767 2.1 1.999 2.1h2.539M5.815 15.784h6.51M14.173 10.92c-1.232 0-1.999-.869-1.999-2.1V5.498c0-1.23.771-2.1 1.999-2.1h5.078c1.232 0 1.999.87 1.999 2.1V8.82c0 1.231-.767 2.1-1.999 2.1h-2.539M12.174 6.07h6.603M3.25 8.47a5.11 5.11 0 0 1 5.111-5.11l-.607 1.632M21.25 15.526a5.11 5.11 0 0 1-5.111 5.112l.607-1.633"
    />
  </Svg>
);
export default IconlystBankCardSwapBroken;
