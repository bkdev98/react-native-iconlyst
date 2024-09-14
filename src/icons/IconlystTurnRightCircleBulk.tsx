import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.75c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.265 14.965-2.307 2.307a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.028-1.028h-2.32a4.094 4.094 0 0 1-4.089-4.091 4.093 4.093 0 0 1 4.089-4.09h1.587a.75.75 0 0 1 0 1.5h-1.587a2.59 2.59 0 0 0-2.589 2.59 2.59 2.59 0 0 0 2.589 2.59h2.32l-1.028-1.028a.75.75 0 1 1 1.061-1.061l2.307 2.309a.8.8 0 0 1 .163.243c.016.038.015.08.024.119.013.056.034.109.034.169 0 .057-.02.107-.032.16-.01.043-.009.088-.026.128a.8.8 0 0 1-.163.243"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightCircleBulk;
