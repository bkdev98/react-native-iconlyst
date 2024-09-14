import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPokerOutline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.006-.006.048-.044a7.667 7.667 0 0 0-5.245-13.26m6.786 13.83a9.14 9.14 0 0 0 2.381-6.163 9.167 9.167 0 0 0-9.167-9.167 9.167 9.167 0 0 0-9.167 9.167 9.168 9.168 0 0 0 14.857 7.189l2.933 2.925a.75.75 0 0 0 1.06-1.062zm-10.9-6.427a.75.75 0 0 1 .75-.75h.013a.75.75 0 0 1 0 1.5h-.014a.75.75 0 0 1-.75-.75m6.796 0a.75.75 0 0 1 .75-.75h.014a.75.75 0 0 1 0 1.5h-.014a.75.75 0 0 1-.75-.75m-5.15 3.673a.75.75 0 0 1 .75-.75h3.434a.75.75 0 0 1 0 1.5h-3.434a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPokerOutline;
