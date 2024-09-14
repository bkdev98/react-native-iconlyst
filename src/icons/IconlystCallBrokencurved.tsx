import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallBrokencurved = ({
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
      d="M8.45 15.799C1.553 8.899 2.533 5.74 3.26 4.723c.094-.164 2.396-3.611 4.865-1.59 6.126 5.047-1.63 4.333 3.514 9.478 5.146 5.145 4.432-2.611 9.477 3.514 2.022 2.469-1.425 4.772-1.588 4.864-.891.637-3.422 1.468-8.663-2.956"
    />
  </Svg>
);
export default IconlystCallBrokencurved;
