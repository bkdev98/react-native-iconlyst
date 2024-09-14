import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.879 14.95c0 2.187 1.361 3.732 3.55 3.732h9.018c2.19 0 3.55-1.545 3.55-3.732V9.051c0-2.187-1.36-3.73-3.55-3.73h-8.86M10.098 10.065H21M8.62 14.842h2.657M4.822 11.244V5.918M6.647 9.414l-1.824 1.831L3 9.415M8.62 14.842h2.657"
    />
  </Svg>
);
export default IconlystBankCardRecieveLight;
