import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchNotFoundOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.006-.006.048-.044a7.667 7.667 0 0 0-5.245-13.26m6.786 13.83a9.14 9.14 0 0 0 2.381-6.163 9.167 9.167 0 0 0-9.167-9.167 9.167 9.167 0 0 0-9.167 9.167 9.168 9.168 0 0 0 14.857 7.189l2.933 2.925a.75.75 0 0 0 1.06-1.062zM8.65 9.208a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H9.4a.75.75 0 0 1-.75-.75m4.864 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m-1.632 4.778c-.656 0-1.27.324-1.707.891a.75.75 0 0 1-1.189-.914c.685-.89 1.719-1.477 2.896-1.477s2.211.587 2.895 1.478a.75.75 0 1 1-1.19.913c-.435-.567-1.05-.89-1.705-.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchNotFoundOutline;
