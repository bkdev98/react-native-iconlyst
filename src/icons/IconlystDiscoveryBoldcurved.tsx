import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryBoldcurved = ({
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
      d="m15.868 9.228-1.417 4.528a.68.68 0 0 1-.443.444l-4.53 1.418a.67.67 0 0 1-.68-.167.68.68 0 0 1-.167-.679l1.418-4.53a.67.67 0 0 1 .443-.443l4.53-1.417a.675.675 0 0 1 .846.846M12.25 2.25C5.051 2.25 2.5 4.802 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscoveryBoldcurved;
