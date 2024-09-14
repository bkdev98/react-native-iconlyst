import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.754 2a4.53 4.53 0 0 1 4.519 4.474h.219A5.01 5.01 0 0 1 21.5 11.48v5.516A5.01 5.01 0 0 1 16.492 22H7.008A5.01 5.01 0 0 1 2 16.996V11.48a5.01 5.01 0 0 1 5.008-5.005l.204-.001.006-.195A4.5 4.5 0 0 1 8.55 3.311C9.408 2.46 10.56 2.035 11.754 2m4.738 5.975-.22-.001v1.582a.75.75 0 0 1-1.5 0V7.974H8.712v1.582a.75.75 0 0 1-1.5 0V7.974h-.203A3.51 3.51 0 0 0 3.5 11.48v5.516A3.51 3.51 0 0 0 7.008 20.5h9.484A3.51 3.51 0 0 0 20 16.996V11.48a3.51 3.51 0 0 0-3.508-3.505M11.75 3.5c-.811.028-1.571.308-2.145.876a3 3 0 0 0-.895 2.098h6.06l-.003-.128A3.027 3.027 0 0 0 11.75 3.5"
    />
  </Svg>
);
export default IconlystBag2Outline;
