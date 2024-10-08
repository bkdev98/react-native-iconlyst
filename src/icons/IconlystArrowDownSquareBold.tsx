import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareBold = ({
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
      d="M16.33 2C19.72 2 22 4.38 22 7.91v8.17c0 3.54-2.28 5.92-5.67 5.92H7.66C4.27 22 2 19.62 2 16.08V7.91C2 4.38 4.27 2 7.66 2ZM12 7.17c-.42 0-.75.33-.75.75v6.35l-2.47-2.48a.77.77 0 0 0-.53-.22c-.19 0-.38.08-.53.22-.29.29-.29.77 0 1.06l3.75 3.77c.28.28.78.28 1.06 0l3.75-3.77c.29-.29.29-.77 0-1.06a.767.767 0 0 0-1.07 0l-2.46 2.48V7.92c0-.42-.34-.75-.75-.75"
    />
  </Svg>
);
export default IconlystArrowDownSquareBold;
