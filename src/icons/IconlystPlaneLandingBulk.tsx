import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLandingBulk = ({
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
      d="M19.36 20.25H5.234a.75.75 0 0 0 0 1.5H19.36a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.763 13.973c-.28-.875-1.107-1.706-2.215-2.224-1.03-.477-2.098-.896-3.203-1.37a189 189 0 0 0-.275-4.83c-.074-1.099-.49-1.887-1.235-2.339-.419-.256-.86-.453-1.29-.645a24 24 0 0 1-.534-.243.75.75 0 0 0-1.013.39L8.91 7.734c-.588-.24-1.29-.523-1.982-.802L5.21 6.238l.312-.755a.75.75 0 0 0-1.39-.567L3.592 6.23c-1.141 2.844-.168 5.251 2.606 6.44a553 553 0 0 0 10.284 4.264c.495.202 1.052.32 1.603.32.974 0 1.925-.37 2.454-1.317.357-.63.434-1.31.224-1.964"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneLandingBulk;
