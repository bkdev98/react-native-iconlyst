import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeControllerBroken = ({
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
      d="M8.001 8.39v2.87m1.436-1.435h-2.87M16.008 11.27v-.01M16.008 8.4v-.01M14.572 9.835v-.01M17.441 9.835v-.01M11.78 15.7l-1.098 1.976h2.636l-1.099 1.977M7.956 15.678c-.198.27-.36.523-.702.775-.676.504-1.478.737-2.738.27-1.324-.54-1.549-1.963-1.513-3.277-.01-.297.243-7.075 3.033-8.542.576-.253 2.124-1.135 4.114.053 1.459.864 2.07 1.017 3.7 0 1.908-1.196 3.538-.306 4.114-.053.774.406 1.353 1.218 1.784 2.186M16.024 15.678l.01.013c.204.266.4.522.72.761.674.504 1.48.738 2.73.27 1.324-.54 1.548-1.963 1.512-3.276.005-.146-.051-1.867-.445-3.75"
    />
  </Svg>
);
export default IconlystChargeControllerBroken;
