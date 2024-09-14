import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeSquareOutlinecurved = ({
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
      fillRule="evenodd"
      d="M4.243 4.243C5.911 2.576 8.49 2 12 2s6.09.576 7.757 2.243C21.425 5.911 22 8.49 22 12s-.575 6.089-2.243 7.757S15.51 22 12 22s-6.089-.575-7.757-2.243S2 15.51 2 12s.576-6.089 2.243-7.757m1.061 1.061C4.081 6.527 3.5 8.574 3.5 12c0 3.427.581 5.473 1.804 6.696S8.574 20.5 12 20.5c3.427 0 5.473-.58 6.696-1.804C19.92 17.473 20.5 15.427 20.5 12s-.58-5.473-1.804-6.696C17.473 4.081 15.427 3.5 12 3.5s-5.473.581-6.696 1.804"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.884a.75.75 0 0 1 .75.75v3.935l3.024 1.805a.75.75 0 1 1-.768 1.288l-3.391-2.023a.75.75 0 0 1-.366-.644v-4.36a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeSquareOutlinecurved;
