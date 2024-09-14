import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHollyberryTwoTone = ({
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
      d="M17.933 11.884c.075-1.26.545-1.85 1.87-2.594C19.618 8 19.87 7.412 21 6.537c-.569-.826-.631-1.365-.421-2.415-1.13.206-1.677.133-2.425-.48-.834 1.214-1.461 1.45-2.86 1.255-.587 1.034-1.082 1.606-2.335 2.056M11.172 7.313c-1.108-.294-1.678-.807-2.386-1.698-1.452.438-2.157.292-3.243-.86-.693.775-1.262.944-2.495.912.396 1.08.42 1.662-.048 2.634 1.345.741 1.572 1.795 1.59 3.196 1.238.067 2.263.647 2.551 1.973.868-.441 1.43-.594 2.24-.444"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.516 16.9a3.458 3.458 0 1 0 6.917 0 3.458 3.458 0 0 0-6.917 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.416 14.433a3.884 3.884 0 0 1 7.598 1.126 3.882 3.882 0 0 1-6.781 2.581"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.713 13.47a3.882 3.882 0 1 1 6.746-1.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.107 9.422v.01M8.989 16.9v.01M17.6 15.559v.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHollyberryTwoTone;
