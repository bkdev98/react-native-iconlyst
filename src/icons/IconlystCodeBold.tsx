import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeBold = ({
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
      d="M8.182 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v13.999a1 1 0 0 0 1 1h3.182a1 1 0 0 0 0-2H6V6zM19 4h-3.182a1 1 0 0 0 0 2H18v11.999h-2.182a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodeBold;
