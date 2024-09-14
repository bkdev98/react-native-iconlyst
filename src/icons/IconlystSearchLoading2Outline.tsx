import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading2Outline = ({
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
      d="M11.047 2.999a.75.75 0 0 1 .75-.749c5.067.007 9.168 4.12 9.161 9.186a9.14 9.14 0 0 1-2.35 6.117l2.923 2.916a.75.75 0 1 1-1.06 1.062l-2.953-2.947a9.13 9.13 0 0 1-5.746 2.012 9.2 9.2 0 0 1-3.282-.61.75.75 0 1 1 .539-1.4A7.673 7.673 0 1 0 11.796 3.75a.75.75 0 0 1-.75-.751m-1.64-.175a.75.75 0 0 1 .207 1.04l-.006.009A.75.75 0 1 1 8.36 3.04l.006-.01a.75.75 0 0 1 1.04-.207M5.834 5.259a.75.75 0 0 1 .208 1.04l-.006.009a.75.75 0 1 1-1.248-.832l.006-.009a.75.75 0 0 1 1.04-.208M3.92 9.14a.75.75 0 0 1 .208 1.04l-.006.008a.75.75 0 1 1-1.248-.832l.006-.008a.75.75 0 0 1 1.04-.208m.227 4.276a.75.75 0 0 1 .208 1.04l-.006.01a.75.75 0 0 1-1.248-.833l.006-.009a.75.75 0 0 1 1.04-.208m2.328 3.55a.75.75 0 0 1 .208 1.04l-.006.008a.75.75 0 0 1-1.248-.832l.006-.009a.75.75 0 0 1 1.04-.208"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoading2Outline;
