import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate3Bulk = ({
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
      d="m21.83 14.493-1.88-2.8a1 1 0 0 0-1.388-.274l-2.79 1.87a1 1 0 0 0 1.113 1.662l.794-.533c-.883 2.285-3.108 3.922-5.679 3.922a6.1 6.1 0 0 1-5.016-2.629.999.999 0 1 0-1.644 1.138A8.1 8.1 0 0 0 12 20.34c3.524 0 6.563-2.312 7.656-5.496l.514.764a1 1 0 1 0 1.66-1.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.229 11.21a1 1 0 1 0-1.113-1.66l-.793.53C7.206 7.797 9.43 6.16 12 6.16a6.1 6.1 0 0 1 5.016 2.628 1.001 1.001 0 0 0 1.645-1.138A8.1 8.1 0 0 0 12 4.16c-3.522 0-6.56 2.31-7.654 5.493l-.515-.77a1.002 1.002 0 0 0-1.663 1.113l1.88 2.81a1 1 0 0 0 .832.444c.197 0 .39-.059.557-.17z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUpdate3Bulk;
