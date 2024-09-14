import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaypalBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m11.79 20.484.617-3.912a.654.654 0 0 1 .651-.556h2.475a5.47 5.47 0 0 0 5.432-4.641 5.5 5.5 0 0 0-5.432-6.36h-4.117a2.91 2.91 0 0 0-2.884 2.463L6.513 20.287a1.501 1.501 0 0 0 1.481 1.729h2c.901 0 1.656-.644 1.796-1.532"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.263 17.452.617-3.912a.654.654 0 0 1 .651-.556h2.475a5.47 5.47 0 0 0 5.432-4.64 5.5 5.5 0 0 0-5.432-6.36H7.889a2.91 2.91 0 0 0-2.884 2.462l-2.019 12.81c-.069.43.055.868.34 1.202s.702.526 1.141.526h2c.901 0 1.656-.644 1.796-1.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaypalBulk;
