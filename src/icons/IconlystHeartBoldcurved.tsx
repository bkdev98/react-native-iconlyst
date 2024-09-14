import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBoldcurved = ({
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
      d="M17.907 10.698h-.025a.75.75 0 0 1-.725-.775c.032-.951-.433-1.568-1.244-1.651a.75.75 0 1 1 .153-1.492c1.608.164 2.649 1.447 2.59 3.193a.75.75 0 0 1-.75.725m-.082-7.414c-1.72-.55-4.101-.322-5.587 1.364-1.561-1.674-3.861-1.917-5.57-1.363-3.914 1.26-5.135 5.796-4.021 9.275v.001c1.758 5.471 7.603 8.422 9.605 8.422 1.787 0 7.864-2.896 9.602-8.423 1.114-3.478-.11-8.014-4.03-9.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBoldcurved;
