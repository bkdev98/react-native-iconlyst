import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleDownBold = ({
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
      d="M12 19a1 1 0 0 1-.707-.294l-5.001-4.998a1 1 0 1 1 1.414-1.415L12 16.586l4.294-4.293a1 1 0 0 1 1.414 1.415l-5.001 4.998A1 1 0 0 1 12 19"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12a1 1 0 0 1-.707-.293l-5.001-5a1 1 0 1 1 1.414-1.414L12 9.585l4.294-4.292a1 1 0 0 1 1.414 1.414l-5.001 5a1 1 0 0 1-.707.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleDownBold;
