import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithMaskBroken = ({
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
      d="m7.513 20.914-.834-6.437-3.429-2.131M17.84 14.478l3.407-2.13M16.974 20.914l.433-3.219M6.68 14.477c1.098-.284 2.52-.73 4.253-1.507a3.51 3.51 0 0 1 2.833 0c1.639.73 2.994 1.213 4.074 1.507M8.326 9.053c.272-.354.672-.574 1.117-.574s.844.22 1.116.574M13.942 9.053c.271-.354.672-.574 1.117-.574s.845.22 1.116.574"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 3.002h4.218c2.94 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.834 5.026-4.782 5.026H8.034c-2.949 0-4.784-2.081-4.784-5.026V8.028c0-2.945 1.835-5.026 4.783-5.026L8.45 3"
    />
  </Svg>
);
export default IconlystFaceWithMaskBroken;
