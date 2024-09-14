import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchEditBroken = ({
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
      d="M19.972 5.809a1.22 1.22 0 0 0-.067-1.726l-.818-.758a1.22 1.22 0 0 0-1.726.067l-3.505 3.859c-.297.333-.482.749-.53 1.193l-.1.918a.996.996 0 0 0 1.156 1.09l.89-.149c.479-.08.914-.321 1.238-.682l1.731-1.906M19.794 12.713a8.224 8.224 0 0 1-15.348 2.91M3.419 11.641a8.223 8.223 0 0 1 7.2-8.159M17.236 17.664 20.582 21"
    />
  </Svg>
);
export default IconlystSearchEditBroken;
