import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraterBroken = ({
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
      d="m14.63 10.898-.904 1.33m-3.195-1.33-.904 1.33m5.003 3.23-.904 1.33m-3.195-1.33-.904 1.33M8.73 4.658C8.846 3.623 9.72 3 10.763 3h2.474c1.042 0 1.917.623 2.033 1.658l.252 2.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21H7.187a2.31 2.31 0 0 1-2.297-2.567l1.076-9.69a2.31 2.31 0 0 1 2.298-2.056h7.472a2.31 2.31 0 0 1 2.297 2.056l1.077 9.69A2.31 2.31 0 0 1 16.813 21H15.61"
    />
  </Svg>
);
export default IconlystGraterBroken;
