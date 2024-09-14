import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldSearchBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.37 8.771a2.16 2.16 0 0 0 0 4.319 2.15 2.15 0 0 0 1.488-.594 2.161 2.161 0 0 0-1.487-3.724"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.344 15.05a.747.747 0 0 1-1.061.002l-1.003-1.001a3.63 3.63 0 0 1-1.91.539 3.66 3.66 0 0 1-3.656-3.66 3.66 3.66 0 0 1 3.657-3.659 3.66 3.66 0 0 1 3.658 3.659c0 .777-.244 1.498-.658 2.091l.972.968a.755.755 0 0 1 0 1.061m4.01-9.912C18.652 4.432 13.025 2.5 12 2.5S5.349 4.431 4.644 5.138c-.561.561-.553.995-.51 3.397.019.974.043 2.3.043 4.135 0 6.407 7.6 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.076-.024 7.679-2.402 7.679-8.809 0-1.829.024-3.152.04-4.125.045-2.41.053-2.845-.51-3.407"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldSearchBold;
