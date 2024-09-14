import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlazingStarLight = ({
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
      d="m12.947 3.256 1.381 2.758c.137.272.399.46.7.502l3.09.445a.915.915 0 0 1 .514 1.565l-2.234 2.146a.9.9 0 0 0-.267.813l.529 3.03a.928.928 0 0 1-1.35.967l-2.76-1.43a.94.94 0 0 0-.867 0l-2.761 1.43a.927.927 0 0 1-1.35-.966l.529-3.031a.9.9 0 0 0-.267-.812L5.597 8.526a.915.915 0 0 1 .515-1.564l3.09-.445a.93.93 0 0 0 .7-.502l1.383-2.76a.936.936 0 0 1 1.662 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.49 14.744-1.654 5.973a.42.42 0 0 0 .644.456l2.407-1.674a.42.42 0 0 1 .48 0l2.408 1.671a.42.42 0 0 0 .643-.459l-1.685-5.967"
    />
  </Svg>
);
export default IconlystBlazingStarLight;
