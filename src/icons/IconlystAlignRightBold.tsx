import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignRightBold = ({
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
      d="M20 6.1h-9.38a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2m0 4.42h-6.07a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2m0 4.96h-6.07a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2m0 4.42h-9.38a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2M4 16.59a1 1 0 0 1-.681-1.732l3.075-2.859-3.075-2.857A1 1 0 0 1 4.68 7.677l3.862 3.59a1 1 0 0 1 0 1.465l-3.862 3.59a1 1 0 0 1-.681.267"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignRightBold;
