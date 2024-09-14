import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryElectricOutline = ({
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
      d="M6.359 15.108a.75.75 0 0 1 .59.882l-.531 2.668a.75.75 0 0 1-.882.59l-2.682-.534a.75.75 0 0 1 .292-1.471l1.947.387.384-1.932a.75.75 0 0 1 .882-.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.386 4.216a8.011 8.011 0 0 0-7.18 13.449.75.75 0 1 1-1.08 1.042 9.51 9.51 0 0 1 .09-13.306l.533.528-.532-.528a9.5 9.5 0 0 1 8.433-2.662.75.75 0 0 1-.264 1.477M17.9 5.138a.75.75 0 0 1 .564-.112l2.682.533a.75.75 0 0 1-.293 1.471l-1.946-.386-.384 1.932a.75.75 0 1 1-1.472-.293l.53-2.667a.75.75 0 0 1 .32-.478"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.814 5.547a.75.75 0 0 1 1.06.018 9.511 9.511 0 0 1-8.524 15.968.75.75 0 1 1 .264-1.477 8.011 8.011 0 0 0 7.18-13.449.75.75 0 0 1 .02-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.975 7.98-1.66 4.052h1.49c.698 0 1.207.662 1.027 1.338l-.443 1.661 2.985-3.406h-1.592a1.064 1.064 0 0 1-.986-1.462l.93-2.183zm-1.286-.82c.158-.409.552-.68.992-.68h2.706a1.064 1.064 0 0 1 .986 1.462l-.93 2.183h1.893c.914 0 1.403 1.076.8 1.764l-4.85 5.537c-.742.846-2.118.112-1.828-.975l.778-2.92H8.664a1.064 1.064 0 0 1-.988-1.455z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryElectricOutline;
