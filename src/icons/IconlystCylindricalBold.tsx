import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 4.621c3.46 0 5.87 1.45 5.87 2.75 0 1.31-2.41 2.75-5.87 2.75s-5.87-1.44-5.87-2.75c0-1.3 2.41-2.75 5.87-2.75m7.36 2.59c-.14-2.3-3.32-4.09-7.36-4.09s-7.22 1.79-7.36 4.09c-.01.05-.01.11-.01.16v11c0 .05 0 .11.01.16.14 2.31 3.32 4.09 7.36 4.09s7.22-1.78 7.36-4.09c.01-.05.01-.11.01-.16v-11c0-.05 0-.11-.01-.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalBold;
