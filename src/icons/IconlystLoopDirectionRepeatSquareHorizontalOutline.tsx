import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatSquareHorizontalOutline = ({
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
      d="M11.352 3.139a.75.75 0 0 1 1.06 0l3.016 3.015a.75.75 0 0 1 0 1.06l-3.016 3.016a.75.75 0 0 1-1.06-1.06l2.485-2.486L11.352 4.2a.75.75 0 0 1 0-1.06M12.515 13.77a.75.75 0 0 0-1.06 0l-3.017 3.015a.75.75 0 0 0 0 1.06l3.016 3.016a.75.75 0 0 0 1.06-1.06l-2.485-2.486 2.486-2.485a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 9.74a3.805 3.805 0 0 1 3.806-3.806h8.78a.75.75 0 0 1 0 1.5h-8.78A2.306 2.306 0 0 0 3.75 9.74v4.513a2.305 2.305 0 0 0 2.306 2.305.75.75 0 0 1 0 1.5 3.806 3.806 0 0 1-3.806-3.805zM17.194 6.684a.75.75 0 0 1 .75-.75A3.806 3.806 0 0 1 21.75 9.74v4.513a3.806 3.806 0 0 1-3.806 3.805H9.06a.75.75 0 0 1 0-1.5h8.885a2.305 2.305 0 0 0 2.306-2.305V9.74a2.305 2.305 0 0 0-2.306-2.306.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatSquareHorizontalOutline;
