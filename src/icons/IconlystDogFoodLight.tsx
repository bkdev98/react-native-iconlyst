import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogFoodLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.428 12.507c-.633 0-1.146.513-1.147 1.146H9.724a1.146 1.146 0 1 0-1.629 1.038 1.144 1.144 0 0 0 .483 2.183c.633 0 1.146-.513 1.146-1.146h4.558a1.147 1.147 0 0 0 2.294 0c0-.46-.273-.855-.664-1.037a1.145 1.145 0 0 0-.483-2.184"
    />
    <Ellipse
      cx={12.001}
      cy={7.678}
      stroke={props.color}
      strokeWidth={1.5}
      rx={8.509}
      ry={2.767}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="m20.512 7.74.736 8.045c.13 2.43-4.97 3.905-9.248 3.905s-9.377-1.475-9.248-3.905L3.49 7.74"
    />
  </Svg>
);
export default IconlystDogFoodLight;
