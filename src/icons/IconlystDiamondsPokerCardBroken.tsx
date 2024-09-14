import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsPokerCardBroken = ({
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
      d="M15 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3M16 6v.01M8 18v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.868 11.335a1.02 1.02 0 0 0-.003 1.305l2.347 2.84a1.022 1.022 0 0 0 1.575 0l2.347-2.84c.313-.38.312-.928-.003-1.305l-2.346-2.817a1.022 1.022 0 0 0-1.57 0"
    />
  </Svg>
);
export default IconlystDiamondsPokerCardBroken;
