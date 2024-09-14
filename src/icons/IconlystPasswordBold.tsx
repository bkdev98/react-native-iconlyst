import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.906 13.26a1.011 1.011 0 1 1 0-2.023 1.011 1.011 0 0 1 0 2.022m-3.906 0a1.011 1.011 0 1 1 .002-2.023A1.011 1.011 0 0 1 12 13.26m-3.905 0a1.011 1.011 0 1 1 0-2.023 1.011 1.011 0 0 1 0 2.022m8.122-8.49H7.782C4.622 4.77 2.5 6.992 2.5 10.3v4.05c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V10.3c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordBold;
