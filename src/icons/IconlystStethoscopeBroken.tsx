import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStethoscopeBroken = ({
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
      d="M13.809 3.963a.963.963 0 1 1-1.926 0 .963.963 0 0 1 1.926 0M6.569 3.963a.963.963 0 1 1-1.926 0 .963.963 0 0 1 1.926 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.132 14.422a1.935 1.935 0 1 1-1.935-1.936M9.298 15.715v.836c0 1.536.779 2.89 1.962 3.689"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.198 16.356v.193a4.45 4.45 0 0 1-4.45 4.45M13.58 4.756a5.43 5.43 0 0 1-.441 7.176 5.24 5.24 0 0 1-2.134 1.305v.01a5.5 5.5 0 0 1-3.411 0 5.4 5.4 0 0 1-2.134-1.315 5.425 5.425 0 0 1-.432-7.193"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.004 13.235v.774a1.706 1.706 0 0 1-3.41 0v-.774"
    />
  </Svg>
);
export default IconlystStethoscopeBroken;
