import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen4Outline = ({
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
      d="M7.809 21.507a5.38 5.38 0 0 1-3.91-1.455 5.06 5.06 0 0 1-1.4-3.686v-5.845a3.81 3.81 0 0 1 1.636-3.129L10.29 3.1a3.44 3.44 0 0 1 3.916 0l6.159 4.293A3.81 3.81 0 0 1 22 10.521v5.845a5.06 5.06 0 0 1-1.4 3.686 5.39 5.39 0 0 1-3.911 1.455h-8.88m.019-1.5h8.856a3.93 3.93 0 0 0 2.852-1.02 3.6 3.6 0 0 0 .961-2.624v-5.845a2.3 2.3 0 0 0-.99-1.9l-6.159-4.294a1.94 1.94 0 0 0-2.2 0L4.992 8.617a2.31 2.31 0 0 0-.991 1.9v5.845a3.6 3.6 0 0 0 .96 2.624 3.93 3.93 0 0 0 2.852 1.017z"
    />
    <Path
      fill={props.color}
      d="M12.262 16.342a2.8 2.8 0 0 1-1.75-.613l-4.044-3.256a.75.75 0 0 1-.28-.584A3.336 3.336 0 0 1 9.77 8.428h4.936a3.343 3.343 0 0 1 3.6 3.461.75.75 0 0 1-.278.582l-4 3.252a2.82 2.82 0 0 1-1.766.619M7.71 11.547l3.74 3.01a1.31 1.31 0 0 0 1.636 0l3.7-3a1.84 1.84 0 0 0-2.078-1.621H9.771a1.83 1.83 0 0 0-2.062 1.611"
    />
  </Svg>
);
export default IconlystEmailOpen4Outline;
