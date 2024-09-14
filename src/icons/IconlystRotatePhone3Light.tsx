import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone3Light = ({
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
      d="m19.688 11.946-7.635-7.634a3.44 3.44 0 0 0-4.863 0L4.31 7.19a3.44 3.44 0 0 0 .002 4.864l7.634 7.633a3.44 3.44 0 0 0 4.864 0l2.878-2.878a3.44 3.44 0 0 0 0-4.864"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.054 20.999c-1.346-.316-2.702-1.06-3.848-2.206S3.313 16.287 3 14.945l1.716 1.153M14.945 3c1.346.316 2.702 1.06 3.848 2.206S20.686 7.712 21 9.054L19.283 7.9M15.645 15.697v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystRotatePhone3Light;
