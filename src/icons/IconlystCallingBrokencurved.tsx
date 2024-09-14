import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.906 2.375a7.97 7.97 0 0 1 7.04 7.032M14.906 5.918a4.43 4.43 0 0 1 3.5 3.5M8.253 15.924C1.356 9.024 2.336 5.866 3.064 4.848c.093-.164 2.395-3.611 4.864-1.59 6.126 5.047-1.63 4.333 3.514 9.478 5.146 5.145 4.431-2.611 9.477 3.514 2.022 2.469-1.425 4.772-1.588 4.864-.888.635-3.406 1.463-8.615-2.916"
    />
  </Svg>
);
export default IconlystCallingBrokencurved;
