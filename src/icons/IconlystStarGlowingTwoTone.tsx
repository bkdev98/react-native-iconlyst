import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlowingTwoTone = ({
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
      d="M12.121 19.235v1.154M6.71 4.427l-.815-.816M17.535 4.427l.816-.816M20.273 13.942l1.092.376M3.957 13.942l-1.091.376"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.885 4.912 1.263 2.676a.86.86 0 0 0 .642.487l2.83.43c.459.064.782.511.721.995a.9.9 0 0 1-.249.524l-2.047 2.081a.92.92 0 0 0-.246.788l.485 2.94c.075.489-.24.95-.704 1.03a.8.8 0 0 1-.533-.093l-2.527-1.388a.83.83 0 0 0-.794 0l-2.53 1.388c-.413.233-.93.067-1.149-.372a.95.95 0 0 1-.087-.566l.483-2.939a.9.9 0 0 0-.244-.788l-2.048-2.081a.927.927 0 0 1-.024-1.254.82.82 0 0 1 .495-.263l2.83-.432a.85.85 0 0 0 .642-.486l1.267-2.677c.22-.445.736-.619 1.156-.39a.9.9 0 0 1 .368.39"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarGlowingTwoTone;
