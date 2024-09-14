import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteBoardBold = ({
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
      d="M13.033 3v1.12h3.89a4.265 4.265 0 0 1 4.26 4.26v5.09a4.265 4.265 0 0 1-4.26 4.26h-3.127l2.695 2.745a.749.749 0 1 1-1.07 1.05l-3.137-3.195-3.138 3.195a.749.749 0 1 1-1.07-1.05l2.695-2.745H7.643a4.265 4.265 0 0 1-4.26-4.26V8.38a4.265 4.265 0 0 1 4.26-4.26h3.89V3a.75.75 0 0 1 1.5 0"
    />
  </Svg>
);
export default IconlystWhiteBoardBold;
