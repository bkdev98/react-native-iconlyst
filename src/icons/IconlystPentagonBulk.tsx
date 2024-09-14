import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonBulk = ({
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
      d="M12.04 2.962a3.07 3.07 0 0 0-1.851.593L3.77 8.215a3.08 3.08 0 0 0-1.12 3.449l2.452 7.538a3.07 3.07 0 0 0 2.93 2.137h4.008z"
    />
    <Path
      fill={props.color}
      d="M12.04 21.339V2.962a3.07 3.07 0 0 1 1.772.593l6.418 4.66a3.09 3.09 0 0 1 1.12 3.448l-2.452 7.54a3.07 3.07 0 0 1-2.932 2.136z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPentagonBulk;
