import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallLightcurved = ({
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
      d="M8.2 15.799C1.303 8.9 2.283 5.741 3.01 4.723c.094-.164 2.396-3.611 4.865-1.589C14 8.18 6.245 7.466 11.389 12.611c5.146 5.144 4.432-2.611 9.477 3.514 2.022 2.469-1.425 4.771-1.588 4.864-1.018.728-4.178 1.709-11.078-5.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallLightcurved;
