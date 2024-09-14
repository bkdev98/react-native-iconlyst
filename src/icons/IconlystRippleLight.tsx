import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRippleLight = ({
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
      d="M12.636 7.302a3.502 3.502 0 1 1 4.209 2.609c-2.406.471-2.188 3.924.365 4.086a3.501 3.501 0 1 1-3.501 3.502c.19-1.863-1.942-4.4-4.198-2.2a3.501 3.501 0 1 1-.522-4.925c2.557 1.758 4.27-.914 3.647-3.072"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRippleLight;
