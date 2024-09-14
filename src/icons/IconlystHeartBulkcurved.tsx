import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBulkcurved = ({
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
      d="M17.825 3.284c-1.72-.55-4.101-.322-5.587 1.364-1.561-1.674-3.861-1.917-5.57-1.363-3.914 1.26-5.135 5.796-4.021 9.275 1.758 5.472 7.603 8.423 9.605 8.423 1.787 0 7.864-2.896 9.602-8.423 1.114-3.478-.11-8.014-4.03-9.276"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.882 10.698h.025a.75.75 0 0 0 .749-.725c.059-1.746-.982-3.029-2.59-3.193a.75.75 0 1 0-.153 1.492c.81.083 1.276.7 1.244 1.651a.75.75 0 0 0 .725.775"
    />
  </Svg>
);
export default IconlystHeartBulkcurved;
