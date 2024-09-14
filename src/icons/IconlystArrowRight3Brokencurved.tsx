import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Brokencurved = ({
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
      d="M12.898 12.003h-8.95M18.822 13.963c.997-.781 1.73-1.54 1.73-1.97 0-1.26-6.364-5.27-7.086-4.55s-.791 8.31 0 9.1c.3.3 1.393-.101 2.634-.784"
    />
  </Svg>
);
export default IconlystArrowRight3Brokencurved;
