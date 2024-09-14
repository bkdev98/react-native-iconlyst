import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRelievedBroken = ({
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
      d="M9.354 14.35c.72.937 1.78 1.521 2.958 1.521 1.177 0 2.237-.584 2.957-1.521M8.324 9.411c.271-.354.672-.575 1.117-.575s.845.22 1.117.575M13.94 9.411c.272-.354.673-.575 1.118-.575.444 0 .845.22 1.117.575"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 20.998H8.031c-2.94 0-4.782-2.081-4.782-5.026V8.024c0-2.945 1.834-5.026 4.782-5.026h8.434c2.949 0 4.784 2.081 4.784 5.026v7.948c0 2.945-1.835 5.026-4.783 5.026L16.05 21"
    />
  </Svg>
);
export default IconlystRelievedBroken;
