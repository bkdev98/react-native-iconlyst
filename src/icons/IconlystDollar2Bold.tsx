import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollar2Bold = ({
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
      d="M12.998 16.43v-3.145a1.572 1.572 0 0 1 0 3.145M9.444 9.603a1.67 1.67 0 0 1 1.554-1.658v3.327a1.677 1.677 0 0 1-1.554-1.669m7.112 5.25a3.575 3.575 0 0 0-3.558-3.568V7.932h.34c.67 0 1.217.543 1.217 1.21v.13a1 1 0 1 0 2 0v-.13c0-1.77-1.443-3.21-3.217-3.21h-.34v-.87a1 1 0 1 0-2 0v.882c-1.97.067-3.554 1.676-3.554 3.66a3.68 3.68 0 0 0 3.554 3.667v3.162h-.336c-.671 0-1.216-.547-1.216-1.22a1 1 0 1 0-2 0 3.22 3.22 0 0 0 3.216 3.22h.336v.63a1 1 0 0 0 2 0v-.633a3.58 3.58 0 0 0 3.558-3.578"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollar2Bold;
