import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSearchOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.524 22.606a9.7 9.7 0 0 1-4.07-.893 3.2 3.2 0 0 0-.981-.3c-.361.04-.715.13-1.051.267-.765.263-1.813.624-2.57-.136s-.411-1.758-.137-2.563c.138-.343.227-.703.264-1.071a3.1 3.1 0 0 0-.3-1 9.835 9.835 0 0 1 1.968-11 9.67 9.67 0 0 1 6.895-2.863 9.66 9.66 0 0 1 6.902 2.869 9.777 9.777 0 0 1-6.92 16.69m-5.055-2.69a4.2 4.2 0 0 1 1.564.413l.035.015a8.274 8.274 0 0 0 9.31-13.37 8.18 8.18 0 0 0-5.832-2.422 8.18 8.18 0 0 0-5.833 2.422A8.345 8.345 0 0 0 5.06 16.32c.24.5.383 1.04.42 1.593a5 5 0 0 1-.344 1.553c-.094.277-.315.927-.22 1.022s.742-.13 1.018-.223a4.9 4.9 0 0 1 1.535-.348z"
    />
    <Path
      fill={props.color}
      d="M15.72 16.84a.74.74 0 0 1-.53-.22l-1.1-1.1a3.611 3.611 0 1 1 1.09-1.03l1.073 1.076a.75.75 0 0 1-.53 1.278zm-3.5-6.515a2.107 2.107 0 1 0-.013 4.214 2.107 2.107 0 0 0 .013-4.214"
    />
  </Svg>
);
export default IconlystMessagesSearchOutline;
