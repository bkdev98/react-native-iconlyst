import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryOutlinecurved = ({
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
      d="M4.243 4.243C5.911 2.576 8.49 2 12 2s6.089.576 7.757 2.243C21.424 5.911 22 8.49 22 12s-.576 6.089-2.243 7.757C18.089 21.425 15.51 22 12 22s-6.089-.575-7.757-2.243S2 15.51 2 12s.576-6.089 2.243-7.757m1.061 1.061C4.081 6.527 3.5 8.574 3.5 12c0 3.427.581 5.473 1.804 6.696S8.574 20.5 12 20.5c3.427 0 5.473-.58 6.696-1.804C19.919 17.473 20.5 15.427 20.5 12s-.581-5.473-1.804-6.696S15.426 3.5 12 3.5c-3.427 0-5.473.581-6.696 1.804"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.832 8.168a.75.75 0 0 1 .185.754l-1.573 5.03a.75.75 0 0 1-.492.491l-5.03 1.575a.75.75 0 0 1-.94-.94l1.574-5.03a.75.75 0 0 1 .492-.491l5.03-1.574a.75.75 0 0 1 .754.185m-4.962 2.703-1.028 3.287 3.287-1.03 1.029-3.286z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscoveryOutlinecurved;
