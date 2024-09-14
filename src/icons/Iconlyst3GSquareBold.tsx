import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3GSquareBold = ({
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
      d="M17.354 13.47c0 1.228-.852 1.96-2.28 1.96a3.14 3.14 0 0 1-2.289-.959c-.652-.68-.988-1.617-.946-2.642a3.5 3.5 0 0 1 1.13-2.42c.637-.581 1.449-.886 2.278-.837.471.024.926.144 1.352.357a.75.75 0 0 1-.671 1.342 1.9 1.9 0 0 0-.758-.201c-.438-.025-.85.137-1.19.448a1.98 1.98 0 0 0-.642 1.373c-.025.603.168 1.165.529 1.542.313.325.73.497 1.207.497.78 0 .78-.244.78-.46v-.72h-.78a.75.75 0 0 1 0-1.5h1.53a.75.75 0 0 1 .75.75zM8.62 15.42a2.37 2.37 0 0 1-1.698-.702.751.751 0 0 1 1.064-1.057.89.89 0 0 0 .634.259.896.896 0 1 0 0-1.79.75.75 0 0 1-.584-1.221l.669-.829H7.396a.75.75 0 0 1 0-1.5h2.877a.75.75 0 0 1 .584 1.221l-.963 1.194a2.39 2.39 0 0 1 1.125 2.025c0 1.323-1.076 2.4-2.399 2.4M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3GSquareBold;
