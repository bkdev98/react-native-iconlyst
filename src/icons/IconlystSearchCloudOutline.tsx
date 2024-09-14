import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloudOutline = ({
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
      d="M13.868 3.496c.524-.692 1.368-1.246 2.563-1.246 1.194 0 2.038.554 2.562 1.246.324.428.528.911.632 1.356.505.11.972.344 1.35.704.544.52.851 1.254.851 2.11a2.89 2.89 0 0 1-1.727 2.646 3.1 3.1 0 0 1-1.143.227h-5.055a3.1 3.1 0 0 1-1.168-.242 2.89 2.89 0 0 1-1.698-2.63c0-.857.307-1.591.852-2.11.377-.36.845-.595 1.35-.705.103-.445.307-.928.631-1.356m1.197.905c-.297.392-.412.864-.412 1.128a.75.75 0 0 1-.743.75c-.42.003-.76.145-.988.363-.221.211-.387.54-.387 1.024 0 .556.327 1.037.804 1.259.213.084.422.114.562.114h5.055c.143 0 .353-.029.57-.113.473-.22.8-.702.8-1.26 0-.484-.166-.813-.387-1.024-.228-.218-.567-.36-.988-.363a.75.75 0 0 1-.743-.75c0-.264-.115-.736-.412-1.128-.273-.361-.693-.651-1.365-.651-.673 0-1.093.29-1.366.65M9.7 4.065a.75.75 0 0 1-.488.942 7.238 7.238 0 1 0 7.1 12.226l.006-.005.048-.045a7.23 7.23 0 0 0 2.067-3.506.75.75 0 0 1 1.454.366 8.7 8.7 0 0 1-1.98 3.71l2.722 2.716a.75.75 0 0 1-1.06 1.062l-2.759-2.753a8.7 8.7 0 0 1-5.398 1.866A8.738 8.738 0 0 1 8.758 3.577a.75.75 0 0 1 .942.488"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCloudOutline;
