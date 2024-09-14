import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightOutlinecurved = ({
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
      d="M13.806 5.316a.75.75 0 0 0-.711 1.32c1.88 1.015 4.71 3.007 5.465 4.614H4.5a.75.75 0 0 0 0 1.5h14.058c-.757 1.61-3.584 3.6-5.463 4.615a.75.75 0 0 0 .71 1.32c.662-.355 6.445-3.564 6.445-6.687 0-3.12-5.783-6.327-6.444-6.682"
    />
  </Svg>
);
export default IconlystArrowRightOutlinecurved;
