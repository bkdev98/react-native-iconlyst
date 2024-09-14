import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone3Broken = ({
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
      d="m17.582 9.34 2.606 2.605a3.44 3.44 0 0 1 0 4.865l-2.878 2.878a3.44 3.44 0 0 1-4.864 0l-7.634-7.633A3.44 3.44 0 0 1 4.81 7.19L7.69 4.31a3.44 3.44 0 0 1 4.863 0l2.803 2.803M9.554 20.999c-1.346-.316-2.702-1.06-3.848-2.206S3.813 16.287 3.5 14.945l1.716 1.153M15.445 3c1.346.316 2.702 1.06 3.848 2.206s1.893 2.506 2.206 3.848L19.783 7.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.145 15.697v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystRotatePhone3Broken;
