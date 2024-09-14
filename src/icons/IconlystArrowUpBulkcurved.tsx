import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpBulkcurved = ({
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
      fillRule="evenodd"
      d="M12.25 20.5a1 1 0 0 0 1-1v-15a1 1 0 0 0-2 0v15a1 1 0 0 0 1 1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M19.155 10.076a1 1 0 0 1-1.76.949l-.002-.002-.006-.01-.024-.046-.102-.18a23.99 23.99 0 0 0-1.755-2.653c-.558-.727-1.171-1.416-1.78-1.914-.635-.518-1.131-.72-1.475-.72-.343 0-.84.202-1.474.72-.61.498-1.224 1.187-1.782 1.914a24 24 0 0 0-1.89 2.891 1 1 0 0 1-1.76-.95q.077-.141.158-.281a25.964 25.964 0 0 1 1.906-2.878c.603-.786 1.324-1.61 2.102-2.245.756-.617 1.703-1.17 2.74-1.17s1.985.553 2.74 1.17c.778.636 1.498 1.46 2.101 2.245a26 26 0 0 1 2.02 3.081l.03.056.01.016.002.004z"
    />
  </Svg>
);
export default IconlystArrowUpBulkcurved;
