import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.08 2C19.62 2 22 4.28 22 7.67v8.67c0 3.389-2.38 5.66-5.92 5.66H7.91C4.38 22 2 19.729 2 16.34V7.67C2 4.28 4.38 2 7.91 2Zm-3.23 5.72a.754.754 0 0 0-1.06 0c-.29.3-.29.77 0 1.07l2.48 2.46H7.92c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h6.35l-2.48 2.47c-.14.14-.22.34-.22.53 0 .189.08.38.22.53.29.29.77.29 1.06 0l3.77-3.75c.28-.28.28-.78 0-1.06Z"
    />
  </Svg>
);
export default IconlystArrowRightSquareBold;
