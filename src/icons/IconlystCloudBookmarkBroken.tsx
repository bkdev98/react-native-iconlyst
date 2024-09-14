import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBookmarkBroken = ({
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
      d="M14.754 18.438v1.498a.334.334 0 0 1-.499.291l-2.227-1.259-2.249 1.261a.335.335 0 0 1-.498-.291v-5.185c0-.93.693-1.292 1.617-1.292h2.239c.953 0 1.615.387 1.615 1.357v.371M12 3.73c-3.617 0-4.897 3.266-4.897 4.898C4.833 8.648 3 10.174 3 12.77c0 1.68 1 3.126 2.436 3.775M18.563 16.543A4.14 4.14 0 0 0 21 12.77c0-2.596-1.83-4.139-4.103-4.14 0-1.07-.55-2.84-1.945-3.934"
    />
  </Svg>
);
export default IconlystCloudBookmarkBroken;
