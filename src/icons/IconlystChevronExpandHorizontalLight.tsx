import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronExpandHorizontalLight = ({
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
      d="M20.484 10.755a1.76 1.76 0 0 1 0 2.49l-3.522 3.522a1.76 1.76 0 0 1-2.49-2.49L16.75 12l-2.277-2.277a1.76 1.76 0 1 1 2.49-2.49zM9.528 7.233a1.76 1.76 0 0 1 0 2.49L7.25 12l2.277 2.277a1.761 1.761 0 0 1-2.49 2.49l-3.522-3.522a1.76 1.76 0 0 1 0-2.49l3.521-3.522a1.76 1.76 0 0 1 2.49 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronExpandHorizontalLight;
