import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone2TwoTone = ({
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
      d="M12.5 4.237a6.115 6.115 0 0 0-6.115 6.115l-.001 1.228c0 .727-.16 1.444-.47 2.1l-.434.923c-.663 1.41.366 3.03 1.923 3.03h10.193a2.126 2.126 0 0 0 1.923-3.03l-.434-.922a4.9 4.9 0 0 1-.47-2.101v-1.228a6.114 6.114 0 0 0-6.114-6.115M12.5 3v1.238"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.488 9.099a2.31 2.31 0 0 1 1.558-1.836M9.613 18.114a2.886 2.886 0 0 0 5.773 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtone2TwoTone;
