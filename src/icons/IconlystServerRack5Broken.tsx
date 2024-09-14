import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack5Broken = ({
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
      d="M7.395 17.31h1.491M11.36 3h5.914a3.69 3.69 0 0 1 0 7.381H6.726a3.69 3.69 0 0 1 0-7.381h.997M11.36 13.62h5.914a3.69 3.69 0 0 1 0 7.38H6.726a3.69 3.69 0 0 1 0-7.38h.997M15.648 5.758v4.52M15.648 21v-4.521M7.395 6.691h1.491"
    />
  </Svg>
);
export default IconlystServerRack5Broken;
