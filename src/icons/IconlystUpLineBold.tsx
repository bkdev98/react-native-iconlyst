import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpLineBold = ({
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
      d="M12 21a1.125 1.125 0 0 1-1.125-1.125v-9.111L7.92 13.729a1.126 1.126 0 0 1-1.593-1.588l4.82-4.835A1.12 1.12 0 0 1 12 6.913h.005c.3 0 .586.12.796.33l4.877 4.898a1.125 1.125 0 1 1-1.594 1.588l-2.959-2.97v9.116c0 .621-.504 1.125-1.125 1.125M17.92 5.25H6.08a1.125 1.125 0 1 1 0-2.25h11.84a1.125 1.125 0 0 1 0 2.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpLineBold;
