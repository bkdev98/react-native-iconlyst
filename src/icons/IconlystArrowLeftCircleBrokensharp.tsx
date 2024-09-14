import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleBrokensharp = ({
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
      d="M16.443 20.248A9.25 9.25 0 0 0 21.5 12c0-5.109-4.14-9.25-9.25-9.25A9.25 9.25 0 0 0 3 12a9.25 9.25 0 0 0 9.25 9.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M13.69 8.53 10.21 12l3.48 3.471"
    />
  </Svg>
);
export default IconlystArrowLeftCircleBrokensharp;
