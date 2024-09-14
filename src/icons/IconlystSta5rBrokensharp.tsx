import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M6.726 13.985A15.6 15.6 0 0 0 3 12a15.66 15.66 0 0 0 9.25-9.25 15.7 15.7 0 0 0 3.443 5.465M17.872 10.085A15.7 15.7 0 0 0 21.5 12a15.66 15.66 0 0 0-9.25 9.25 15.7 15.7 0 0 0-3.839-5.86"
    />
  </Svg>
);
export default IconlystSta5rBrokensharp;
