import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalBagTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.756 21.002H8.064a4.04 4.04 0 0 1-4.04-4.04V9.903a4.04 4.04 0 0 1 4.04-4.04h9.692a4.04 4.04 0 0 1 4.04 4.04v7.059a4.04 4.04 0 0 1-4.04 4.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.91 9.09a4.34 4.34 0 1 1 0 8.68 4.34 4.34 0 0 1 0-8.68"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.912 11.848v3.165M14.495 13.43H11.33"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.293 5.861v-.924c0-1.07-.867-1.937-1.937-1.937h-2.89c-1.07 0-1.937.867-1.937 1.937v.924"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMedicalBagTwoTone;
