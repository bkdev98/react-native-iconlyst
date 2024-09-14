import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxesBroken = ({
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
      d="M16.312 20.52c-1.236.003-2.007-.868-2.01-2.104l-.008-3.043c-.003-1.236.768-2.11 2-2.113l3.537-.008c1.237-.003 2.008.867 2.01 2.102l.008 3.045c.003 1.234-.764 2.11-2 2.112M17.27 16.028h1.604M16.313 10.493c-1.236.003-2.007-.868-2.01-2.103l-.008-2.788c-.003-1.236.768-2.11 2-2.113l3.537-.009c1.237-.002 2.008.868 2.01 2.103l.008 2.79c.003 1.234-.764 2.11-2 2.112M17.27 6.257h1.604M3.854 13.379 3.85 8.577c-.003-1.236.767-2.11 2-2.113l3.537-.008c1.237-.003 2.007.867 2.01 2.102l.008 9.606c.003 1.234-.764 2.11-2 2.112l-3.537.008c-1.236.003-2.008-.868-2.01-2.103l-.003-1.4M6.824 9.548H8.43"
    />
  </Svg>
);
export default IconlystDeliveryBoxesBroken;
