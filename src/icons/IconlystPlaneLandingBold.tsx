import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLandingBold = ({
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
      d="M20.762 14.844c-.28-.875-1.106-1.706-2.214-2.224-1.03-.477-2.099-.896-3.204-1.37a189 189 0 0 0-.274-4.83c-.074-1.099-.49-1.887-1.236-2.339-.418-.256-.86-.453-1.289-.645a24 24 0 0 1-.534-.243.75.75 0 0 0-1.014.39L8.91 8.605c-.588-.24-1.29-.523-1.982-.802L5.21 7.11l.312-.755a.75.75 0 0 0-1.389-.567L3.59 7.101c-1.14 2.844-.168 5.251 2.606 6.44a553 553 0 0 0 10.284 4.264c.496.202 1.053.32 1.604.32.974 0 1.924-.37 2.454-1.317.356-.63.434-1.31.224-1.964M19.36 21.121H5.234a.75.75 0 0 0 0 1.5H19.36a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneLandingBold;
