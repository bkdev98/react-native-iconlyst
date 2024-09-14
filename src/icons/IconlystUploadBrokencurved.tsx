import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBrokencurved = ({
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
      d="M12.37 12.273v2.003M12.37 2.235V9.24M9.45 5.162l2.92-2.928 2.92 2.928M12.25 21.767c6.94 0 9.25 0 9.25-7.101 0-5.33-1.3-6.67-4.88-7M7.88 7.666c-3.58.33-4.88 1.67-4.88 7 0 5.523 1.398 6.75 5.286 7.023"
    />
  </Svg>
);
export default IconlystUploadBrokencurved;
