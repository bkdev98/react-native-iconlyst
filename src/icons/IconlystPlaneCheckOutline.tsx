import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCheckOutline = ({
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
      d="M7.206 16.338a4.45 4.45 0 0 1-4.122-3.072c-.09-.212-.438-1.054-.527-1.269a.75.75 0 1 1 1.388-.57l.288.7c.494-.208 1.068-.452 1.648-.7l1.855-.786-2-4.834a.75.75 0 0 1 .442-.993c.187-.066.37-.136.548-.2q.636-.26 1.3-.435a2.7 2.7 0 0 1 2.467.76A187 187 0 0 1 13.98 8.05c.978-.406 2.03-.869 3.1-1.258a4.03 4.03 0 0 1 3.05.01 2.36 2.36 0 0 1 1.2 1.51c.447 1.6-.778 2.925-2.107 3.484-2.94 1.24-6.42 2.7-9.938 4.111-.66.274-1.365.42-2.079.43M4.883 13.48c.876 1.36 2.167 1.705 3.854 1.03a606 606 0 0 0 9.914-4.1c.62-.26 1.461-.928 1.245-1.7a.86.86 0 0 0-.444-.58 2.54 2.54 0 0 0-1.852.066c-1.026.371-2.053.823-2.959 1.223a1.42 1.42 0 0 1-1.67-.272c-1.138-1.049-2.3-2.07-3.46-3.089-.555-.486-.893-.483-1.129-.428a8 8 0 0 0-.96.317l1.986 4.81a.75.75 0 0 1-.407.978c-.64.266-1.593.67-2.533 1.07-.555.24-1.106.473-1.585.675M12.525 21.123h-7.38a.75.75 0 1 1 0-1.5h7.38a.75.75 0 0 1 0 1.5M17.451 21.002a.75.75 0 0 1-.53-.22l-1.844-1.848a.749.749 0 1 1 1.061-1.06l1.314 1.317 3.267-3.27a.75.75 0 1 1 1.061 1.06l-3.8 3.8a.75.75 0 0 1-.529.22"
    />
  </Svg>
);
export default IconlystPlaneCheckOutline;
