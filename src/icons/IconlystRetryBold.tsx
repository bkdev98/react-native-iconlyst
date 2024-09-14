import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetryBold = ({
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
      d="m6.57 15.069-.716.444c-1.468-2.962-.977-6.681 1.46-9.136a7.94 7.94 0 0 1 7.037-2.222 1 1 0 1 0 .352-1.968 9.95 9.95 0 0 0-8.808 2.78C2.799 8.086 2.212 12.834 4.15 16.57L3.454 17a1 1 0 0 0 .302 1.824l2.533.587a1.001 1.001 0 0 0 1.201-.748l.583-2.52A1.002 1.002 0 0 0 6.57 15.07M18.282 8.895a1 1 0 0 0 1.11.037l.715-.444c1.467 2.962.976 6.68-1.46 9.135a7.95 7.95 0 0 1-7.036 2.22.997.997 0 0 0-1.161.81 1 1 0 0 0 .809 1.16 9.945 9.945 0 0 0 8.808-2.781c3.094-3.118 3.682-7.866 1.744-11.601l.696-.432a1 1 0 0 0-.302-1.824l-2.532-.586a1.004 1.004 0 0 0-1.2.748l-.584 2.519c-.09.394.064.804.393 1.039"
    />
    <Path
      fill={props.color}
      d="M11.978 12.603a1 1 0 1 0 2 0v-4.26a1 1 0 1 0-2 0zM11.983 15.7c0 .553.447.98 1 .98s1-.467 1-1.02a1 1 0 1 0-2 0z"
    />
  </Svg>
);
export default IconlystRetryBold;
