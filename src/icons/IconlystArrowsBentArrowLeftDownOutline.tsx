import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBentArrowLeftDownOutline = ({
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
      d="M4.47 12.52a.75.75 0 0 1 0-1.04c.948-.986 1.922-1.954 2.889-2.914l1.1-1.096A.75.75 0 0 1 9.52 8.53q-.559.559-1.116 1.112-.81.803-1.611 1.608h9.197A2.25 2.25 0 0 0 18.24 9V8a.75.75 0 0 1 1.5 0v1a3.75 3.75 0 0 1-3.75 3.75H6.793q.8.805 1.611 1.608.557.554 1.116 1.112a.75.75 0 1 1-1.06 1.06l-1.101-1.096c-.967-.96-1.941-1.928-2.89-2.914"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBentArrowLeftDownOutline;
