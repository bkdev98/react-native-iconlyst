import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorBold = ({
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
      fillRule="evenodd"
      d="M21.186 11.26H20.14a.75.75 0 0 0 0 1.5h1.045a.75.75 0 0 0 0-1.5M6.155 7.062a.75.75 0 0 0 1.061-.001.75.75 0 0 0 0-1.061l-1-.998a.75.75 0 1 0-1.06 1.061zM6.179 17l-1 1a.75.75 0 1 0 1.06 1.061l1-1A.75.75 0 1 0 6.18 17M12.185 4.76a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75M4.23 11.26H3.187a.75.75 0 0 0 0 1.5H4.23a.75.75 0 0 0 0-1.5M17.685 7.259a.75.75 0 0 0 .53-.22l1-1a.75.75 0 0 0-1.06-1.061l-1 1a.75.75 0 0 0 .53 1.28M12.185 19.259a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M18.237 16.978a.751.751 0 0 0-1.061 1.062l1.001 1a.751.751 0 0 0 1.061-1.062zM15.845 11.282l-4.367-2.604a1.37 1.37 0 0 0-1.548.038 1.37 1.37 0 0 0-.561 1.435l.985 4.89c.126.56.554.969 1.12 1.068q.128.023.252.023c.47 0 .9-.234 1.163-.644l.816-1.276 1.71-.384a1.37 1.37 0 0 0 1.07-1.12 1.38 1.38 0 0 0-.64-1.426"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorBold;
