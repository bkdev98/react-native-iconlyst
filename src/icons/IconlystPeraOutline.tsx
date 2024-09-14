import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeraOutline = ({
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
      d="M11.193 11.82a3.06 3.06 0 0 1 4.172 1.12 3.05 3.05 0 0 1-1.118 4.17c-1.46.84-3.328.34-4.171-1.12a3.05 3.05 0 0 1 1.117-4.17m2.873 1.87a1.552 1.552 0 1 0-2.691 1.55c.429.75 1.38 1 2.122.57.744-.43.998-1.38.569-2.12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.778 2.25a.75.75 0 0 1 .734.77v.02q0 .045.004.12a3.674 3.674 0 0 0 .177.978 5 5 0 0 1 1.61-.298c1.389 0 3.006.66 4.285 2.87.495.86 1.303 1.24 2.403 1.79 2.841 1.439 4.373 4.703 3.687 7.8-.424 2.08-1.721 3.59-3.345 4.47l-.002-.004c-1.561.95-3.507 1.308-5.5.644l.001-.003c-3.023-.954-5.084-3.91-4.908-7.087l.009-.16c.065-1.148.114-1.997-.365-2.82-1.274-2.22-1.036-3.95-.337-5.15a4.7 4.7 0 0 1 1.14-1.3 5 5 0 0 1-.288-1.05 6 6 0 0 1-.071-.78v-.08a.75.75 0 0 1 .766-.73m8.805 17.22c.013-.01.027-.02.04-.02 1.271-.69 2.26-1.85 2.585-3.45l.003-.01c.543-2.44-.67-5.02-2.897-6.15l-.18-.09c-.955-.47-2.125-1.047-2.842-2.292l-.003.002c-1.028-1.78-2.166-2.12-2.98-2.12-.813.01-1.449.36-1.572.429l-.021.011c-.005 0-.01.01-.013.01-.026.01-.727.39-1.176 1.16-.409.7-.684 1.857.336 3.632l.003-.002c.77 1.33.617 2.72.556 3.82-.138 2.49 1.492 4.83 3.87 5.58h.014c1.548.52 3.05.25 4.277-.51"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeraOutline;
