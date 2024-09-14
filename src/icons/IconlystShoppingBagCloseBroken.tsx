import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCloseBroken = ({
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
      d="M21 12.082V8.026C21 5.081 19.165 3 16.217 3H7.782C4.842 3 3 5.081 3 8.026M12.324 21H7.782C4.833 21 3 18.919 3 15.974V12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.58 8.82a3.58 3.58 0 1 1-7.16 0M16.807 16.807l3.786 3.786M20.593 16.807l-3.786 3.786"
    />
  </Svg>
);
export default IconlystShoppingBagCloseBroken;
