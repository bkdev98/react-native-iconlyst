import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsPokerCardOutline = ({
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
      d="M15.25 21.75h-6A4.756 4.756 0 0 1 4.5 17V7a4.756 4.756 0 0 1 4.75-4.75h6A4.756 4.756 0 0 1 20 7v10a4.756 4.756 0 0 1-4.75 4.75m-6-18A3.254 3.254 0 0 0 6 7v10a3.254 3.254 0 0 0 3.25 3.25h6A3.254 3.254 0 0 0 18.5 17V7a3.254 3.254 0 0 0-3.25-3.25z"
    />
    <Path
      fill={props.color}
      d="M16.25 6.76A.752.752 0 1 1 17 6v.01a.75.75 0 0 1-.75.75M8.25 18.76a.753.753 0 0 1-.537-1.28A.753.753 0 0 1 9 18v.01a.75.75 0 0 1-.75.75M12.25 16.604a1.77 1.77 0 0 1-1.366-.642l-2.347-2.84a1.77 1.77 0 0 1 .005-2.264l2.346-2.815A1.764 1.764 0 0 1 13 7.572c.236.11.444.27.61.47l2.346 2.816a1.77 1.77 0 0 1 .005 2.264l-2.347 2.84a1.77 1.77 0 0 1-1.364.642zm0-7.7a.3.3 0 0 0-.208.1L9.695 11.82a.27.27 0 0 0 0 .346l2.345 2.838a.27.27 0 0 0 .419 0l2.347-2.84a.27.27 0 0 0 0-.347l-2.347-2.813a.27.27 0 0 0-.21-.1"
    />
  </Svg>
);
export default IconlystDiamondsPokerCardOutline;
