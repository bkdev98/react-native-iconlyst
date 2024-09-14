import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleRightBulk = ({
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
      d="M12 12a1 1 0 0 1-.293.708l-5 5a1 1 0 1 1-1.414-1.413L9.585 12 5.294 7.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 .292.708"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19 12a1 1 0 0 1-.294.708l-4.998 5a1 1 0 1 1-1.415-1.413L16.586 12l-4.293-4.294a1 1 0 0 1 1.415-1.414l4.998 5a1 1 0 0 1 .294.708"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDoubleRightBulk;
