import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinRightOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.45a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M13.96 7.59a.75.75 0 0 1 .857-.625c1.9.299 3.587.898 4.82 1.724 1.22.818 2.113 1.947 2.113 3.311 0 .994-.48 1.87-1.205 2.58-.723.707-1.723 1.287-2.881 1.722a.75.75 0 1 1-.527-1.404c1.027-.386 1.828-.87 2.358-1.39.528-.516.755-1.03.755-1.508 0-.651-.43-1.382-1.448-2.065-1.004-.673-2.468-1.213-4.218-1.488a.75.75 0 0 1-.625-.857M10.04 7.59a.75.75 0 0 1-.624.857c-1.75.275-3.214.815-4.218 1.488C4.18 10.618 3.75 11.35 3.75 12c0 .806.673 1.737 2.221 2.511 1.505.752 3.635 1.239 6.029 1.239a.75.75 0 0 1 0 1.5c-2.576 0-4.946-.52-6.7-1.397C3.593 14.999 2.25 13.68 2.25 12c0-1.364.894-2.493 2.113-3.31 1.233-.827 2.92-1.426 4.82-1.725a.75.75 0 0 1 .858.625"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.77 13.27a.75.75 0 0 1 1.06 0l2.7 2.699c.14.14.22.331.22.53v.001c0 .2-.08.39-.22.531l-2.7 2.7a.75.75 0 0 1-1.06-1.062l2.17-2.17-2.17-2.169a.75.75 0 0 1 0-1.06M12 4.05a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V4.8a.75.75 0 0 1 .75-.75M12 6.75a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpinRightOutline;
