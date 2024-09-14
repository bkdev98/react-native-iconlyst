import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBrokencurved = ({
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
      d="m18.876 5.413-2.962 2.962M21.914 2.375l-1.189 1.189M15.914 2.375l6 6M8.287 15.924C1.388 9.025 2.37 5.866 3.097 4.847c.093-.163 2.395-3.61 4.864-1.588 6.126 5.046-1.63 4.332 3.515 9.477s4.431-2.611 9.476 3.514c2.022 2.469-1.425 4.77-1.588 4.864-.879.628-3.35 1.444-8.439-2.77"
    />
  </Svg>
);
export default IconlystCallMissedBrokencurved;
