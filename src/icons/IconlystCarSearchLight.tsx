import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarSearchLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.746 15.927a2.926 2.926 0 1 1-4.138 4.138 2.926 2.926 0 0 1 4.138-4.138M19.768 20.086l1.486 1.486M15.045 12.066h1.66M6.84 12.066H8.5M3.466 8.198c5.507.78 11.098.78 16.605 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.089 11.815c0-.75-.24-1.479-.682-2.083l-1.078-1.446a1.7 1.7 0 0 1-.206-.394l-.97-2.693a2.07 2.07 0 0 0-1.597-1.337 24.2 24.2 0 0 0-7.549 0 2.07 2.07 0 0 0-1.589 1.337L5.45 7.892q-.076.203-.206.377L4.148 9.777a3.5 3.5 0 0 0-.665 2.055l-.015 4.81a.924.924 0 0 0 .924.926h1.83c.511 0 .925-.413.925-.924v-.378c0-.51.413-.924.924-.924h4.548"
    />
  </Svg>
);
export default IconlystCarSearchLight;
