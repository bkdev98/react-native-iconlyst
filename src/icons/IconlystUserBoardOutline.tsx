import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoardOutline = ({
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
      d="M4.975 5.968c.813-1.936 2.599-3.14 4.936-3.14h7.82c1.624 0 2.999.578 3.963 1.613.958 1.03 1.456 2.45 1.456 4.042v6.677c0 1.592-.498 3.013-1.456 4.042-.965 1.036-2.339 1.614-3.964 1.614h-3.504a.75.75 0 0 1 0-1.5h3.504c1.255 0 2.215-.437 2.866-1.136.656-.705 1.054-1.737 1.054-3.02V8.483c0-1.282-.398-2.315-1.054-3.02-.65-.698-1.61-1.135-2.865-1.135h-7.82c-1.763 0-2.985.87-3.553 2.22a.75.75 0 0 1-1.383-.58"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.12 16.695a.75.75 0 0 1 .75-.75h2.338a.75.75 0 0 1 0 1.5h-2.339a.75.75 0 0 1-.75-.75M3.842 18.905a2.04 2.04 0 0 0-.692 1.514.75.75 0 0 1-1.5 0c0-.886.35-1.87 1.185-2.625.836-.758 2.09-1.228 3.798-1.228 1.706 0 2.96.466 3.797 1.22a3.52 3.52 0 0 1 1.186 2.621.75.75 0 0 1-1.5 0c0-.496-.195-1.06-.69-1.507-.495-.445-1.357-.834-2.793-.834-1.434 0-2.296.391-2.79.84M6.634 10.102a1.953 1.953 0 1 0-.002 3.906 1.953 1.953 0 0 0 .002-3.906M3.18 12.054a3.453 3.453 0 1 1 6.906.001 3.453 3.453 0 0 1-6.906 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBoardOutline;
