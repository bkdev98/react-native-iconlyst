import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldSearchBulk = ({
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
      d="M19.355 5.138C18.651 4.432 13.025 2.5 12 2.5S5.35 4.431 4.644 5.138c-.56.561-.553.995-.509 3.397.018.974.042 2.3.042 4.135 0 6.407 7.601 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.076-.024 7.68-2.402 7.68-8.809 0-1.829.023-3.152.04-4.125.044-2.41.052-2.845-.51-3.407"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.344 15.049a.747.747 0 0 1-1.061.002L13.28 14.05a3.63 3.63 0 0 1-1.91.538 3.66 3.66 0 0 1-3.656-3.66A3.66 3.66 0 0 1 11.37 7.27a3.66 3.66 0 0 1 3.658 3.659c0 .777-.244 1.498-.658 2.09l.972.969a.755.755 0 0 1 0 1.06m-6.13-4.12A2.16 2.16 0 0 1 11.37 8.77a2.161 2.161 0 0 1 1.487 3.724 2.15 2.15 0 0 1-1.487.595 2.16 2.16 0 0 1-2.157-2.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldSearchBulk;
