import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystControllerReloadBroken = ({
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
      d="M7.956 16.087c-.198.27-.36.523-.702.775-.676.504-1.478.737-2.738.27-1.324-.54-1.549-1.963-1.513-3.277-.01-.297.243-7.075 3.033-8.542.576-.253 2.124-1.134 4.114.054 1.459.864 2.07 1.016 3.7 0 1.908-1.197 3.538-.307 4.114-.054.774.406 1.353 1.218 1.784 2.187M16.024 16.087l.01.013c.204.266.4.522.72.762.674.504 1.48.737 2.73.27 1.324-.54 1.548-1.963 1.512-3.277.005-.146-.051-1.867-.445-3.75M16.008 11.679v-.01M16.008 8.809v-.01M14.574 10.244v-.01M17.443 10.244v-.01M8.001 8.799v2.87m1.436-1.434h-2.87M10.21 17.69a1.8 1.8 0 0 0 1.78 1.553c.402 0 .763-.126 1.057-.344M10.924 16.004a1.72 1.72 0 0 1 1.065-.361c.924 0 1.679.688 1.788 1.577"
    />
  </Svg>
);
export default IconlystControllerReloadBroken;
