import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLight = ({
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
      d="M7.158 10.322c-2.27.02-4.103 1.544-4.103 4.14 0 1.68 1 3.125 2.436 3.774.604.246 1.207.34 1.664.34h9.794c.457 0 1.061-.09 1.673-.335a4.14 4.14 0 0 0 2.433-3.779c0-2.596-1.833-4.12-4.102-4.14 0-1.632-1.282-4.898-4.898-4.898-3.617 0-4.897 3.266-4.897 4.898"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudLight;
