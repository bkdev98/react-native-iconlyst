import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingLightcurved = ({
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
      d="M14.353 2.75a7.97 7.97 0 0 1 7.04 7.032M14.353 6.293a4.43 4.43 0 0 1 3.5 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.7 16.299C.803 9.4 1.783 6.241 2.51 5.223c.094-.164 2.396-3.611 4.865-1.589 6.126 5.045-1.63 4.332 3.514 9.477 5.146 5.144 4.431-2.611 9.477 3.514 2.022 2.469-1.425 4.771-1.588 4.864-1.018.728-4.178 1.709-11.078-5.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallingLightcurved;
