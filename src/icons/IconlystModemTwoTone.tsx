import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystModemTwoTone = ({
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
      d="M3.543 17.204v-1.607a2.507 2.507 0 0 1 2.506-2.507h12.988a2.507 2.507 0 0 1 2.506 2.507v1.607a2.506 2.506 0 0 1-2.506 2.506H6.049a2.506 2.506 0 0 1-2.506-2.506"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.3 16.4H6.79m3.565 0h-.51M7.31 6.538a7.675 7.675 0 0 1 10.855 0M9.914 9.143a3.99 3.99 0 0 1 5.644 0M12.738 13.09v-1.71"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystModemTwoTone;
