import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinLeftOutline = ({
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
      d="M12 9.45a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0v-.01a.75.75 0 0 0-.75-.75M10.041 7.59a.75.75 0 0 0-.857-.625c-1.901.299-3.588.898-4.82 1.724C3.143 9.507 2.25 10.636 2.25 12c0 .994.48 1.87 1.206 2.58.722.707 1.722 1.287 2.88 1.722a.75.75 0 1 0 .528-1.404c-1.028-.386-1.828-.87-2.359-1.39-.528-.516-.755-1.03-.755-1.508 0-.651.43-1.382 1.449-2.065 1.004-.673 2.467-1.213 4.218-1.488a.75.75 0 0 0 .624-.857M13.96 7.59a.75.75 0 0 0 .624.857c1.75.275 3.214.815 4.218 1.488 1.018.683 1.448 1.414 1.448 2.065 0 .806-.672 1.737-2.221 2.511-1.505.752-3.635 1.239-6.029 1.239a.75.75 0 0 0 0 1.5c2.576 0 4.946-.52 6.7-1.397 1.708-.854 3.05-2.173 3.05-3.853 0-1.364-.894-2.493-2.113-3.31-1.233-.827-2.92-1.426-4.82-1.725a.75.75 0 0 0-.858.625"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.231 13.27a.75.75 0 0 0-1.06 0l-2.7 2.699a.75.75 0 0 0-.22.53v.001c0 .2.08.39.22.531l2.7 2.7a.75.75 0 1 0 1.06-1.062l-2.17-2.17 2.17-2.169a.75.75 0 0 0 0-1.06M12 4.05a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0V4.8a.75.75 0 0 0-.75-.75M12 6.75a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpinLeftOutline;
