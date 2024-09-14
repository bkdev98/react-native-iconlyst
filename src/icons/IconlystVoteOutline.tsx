import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoteOutline = ({
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
      fillRule="evenodd"
      d="M13.277 4.176a1.453 1.453 0 0 0-2.054 0l-6.797 6.797a1.453 1.453 0 0 0 0 2.054l6.797 6.798a1.453 1.453 0 0 0 2.054 0l6.798-6.798a1.453 1.453 0 0 0 0-2.054l-.095-.095a.75.75 0 0 1 1.06-1.06l.095.094a2.953 2.953 0 0 1 0 4.176l-6.797 6.797a2.953 2.953 0 0 1-4.176 0l-6.797-6.797a2.953 2.953 0 0 1 0-4.176l6.797-6.797a2.953 2.953 0 0 1 4.176 0l2.106 2.106a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.164 6.288a.75.75 0 0 1 0 1.06l-7.66 7.66a.75.75 0 0 1-1.06 0l-3.029-3.029a.75.75 0 0 1 1.06-1.06l2.5 2.498 7.128-7.129a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoteOutline;
