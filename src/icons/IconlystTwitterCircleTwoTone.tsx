import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.916 8.64-1.266-.026s-.953-1.28-2.353-.856c-1.133.345-1.588 1.68-1.483 2.507a7.17 7.17 0 0 1-4.165-2.082c-.583 3.476.559 5.162 2.271 6.123a4.7 4.7 0 0 1-2.807.824c.89 1.072 2.708 1.257 3.71 1.193 3.49-.22 5.43-2.963 5.21-6.453z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitterCircleTwoTone;
