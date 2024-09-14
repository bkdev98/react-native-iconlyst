import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterOldLight = ({
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
      d="M16.162 21h-3.926a6.84 6.84 0 0 1-6.84-6.84V5.443a2.443 2.443 0 0 1 4.885 0V7.32h5.88a2.443 2.443 0 1 1 0 4.886h-5.88v1.954c0 1.08.875 1.954 1.955 1.954h3.925a2.443 2.443 0 1 1 0 4.886"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitterOldLight;
