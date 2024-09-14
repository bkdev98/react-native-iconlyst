import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingDownTwoTone = ({
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
      d="M12.93 14.996c2.351-.225 5.757-.103 6.708-2.67.957-2.583.015-6.001-1.662-7.678-2.14-2.14-8.12-2.303-10.077.132C6.656 6.325 5.69 8.2 5.082 9.88c-.326.9.153 1.872 1.048 2.215.792.304 1.689.026 2.17-.672l1.202-1.744"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.93 14.998-.067 4.347a1.68 1.68 0 0 1-3.361-.025V9.68"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPointingDownTwoTone;
