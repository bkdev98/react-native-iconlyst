import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.126 21.05H6.74a1.76 1.76 0 0 1-1.618-1.069L3.5 16.187h18l-2.49 4.029a1.76 1.76 0 0 1-1.497.833H14.82M17.895 15.99c.606-9.282-7.278-12.543-7.278-12.543.227 1.56.33 3.098.325 4.554M10.676 11.703c-.245 1.657-.65 3.074-1.176 4.112"
    />
  </Svg>
);
export default IconlystBoat1Broken;
