import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveTwoTone = ({
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
      d="m13.66 3.645-3.322.001c-.615 0-1.184.324-1.498.853l-5.594 9.398a1.75 1.75 0 0 0 0 1.786l2.28 3.824c.315.527.884.851 1.499.851h9.955c.615 0 1.185-.324 1.5-.853l2.274-3.823a1.75 1.75 0 0 0 0-1.784l-5.593-9.401a1.74 1.74 0 0 0-1.501-.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.325 20.04 2.754-5.353m0 0 2.985-5.786m-2.985 5.786h5.97m-2.985-5.786 2.985 5.787M12.064 8.9l-2.55-4.936m5.535 10.723h5.95"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleDriveTwoTone;
