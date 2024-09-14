import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCircleBold = ({
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
      d="M9.795 6.91a2.57 2.57 0 0 1 2.569 2.57 2.57 2.57 0 0 1-2.569 2.57 2.573 2.573 0 0 1-2.57-2.57 2.573 2.573 0 0 1 2.57-2.57m-1.97 7.714c.647.355 1.224.701 1.683.99.114.073.263.061.363-.03l2.74-2.458a4.834 4.834 0 0 1 6.068-.287l2.154 1.566a.29.29 0 0 0 .458-.17c.133-.625.209-1.27.209-1.934 0-5.24-4.262-9.5-9.5-9.5s-9.5 4.26-9.5 9.5c0 .994.161 1.95.448 2.85.065.203.315.265.479.13.971-.8 2.5-1.685 4.398-.657"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.795 10.55a1.07 1.07 0 1 0-.001-2.14 1.07 1.07 0 0 0 .001 2.14M8.243 17.048a.297.297 0 0 0-.044-.477 31 31 0 0 0-1.093-.63c-1.327-.719-2.147.171-3.133.878a.303.303 0 0 0-.09.402c.443.726.98 1.386 1.594 1.967a.293.293 0 0 0 .399.002c.454-.412 1.586-1.439 2.367-2.143M17.797 14.052a3.34 3.34 0 0 0-4.19.196L7.17 20.026a.29.29 0 0 0 .042.47A9.4 9.4 0 0 0 12 21.8c3.79 0 7.065-2.234 8.588-5.452a.29.29 0 0 0-.097-.364c-.521-.372-1.939-1.384-2.693-1.933"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageCircleBold;
