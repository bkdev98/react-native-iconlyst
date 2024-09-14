import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.805 6.265-.647.38c-2.983 1.746-5.288 4.048-6.852 5.924a29 29 0 0 0-1.767 2.35 20 20 0 0 0-.552.868l-.026.044-.005.01-.001.002-.215.38h-.873l-.222-.335-.002-.004-.011-.016-.048-.07a15.758 15.758 0 0 0-.923-1.18c-.629-.728-1.485-1.587-2.441-2.191l-.634-.4.802-1.269.634.401c1.133.716 2.101 1.698 2.775 2.48q.244.284.44.53l.057-.087a30 30 0 0 1 1.86-2.474c1.634-1.96 4.067-4.396 7.246-6.258l.647-.38z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.971 12.535c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10m10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTickSquareOutlinesharp;
