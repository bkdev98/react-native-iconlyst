import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink2Outline = ({
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
      d="m13.715 19.783-.569-6.93c-.09-1.1.775-2.03 1.87-2.03h4.565c1.095 0 1.96.93 1.869 2.03l-.568 6.93c-.08.97-.893 1.72-1.87 1.72h-3.427c-.977 0-1.791-.75-1.87-1.72m.926-7.06.569 6.93c.015.2.18.35.375.35h3.428c.194 0 .358-.15.374-.35l.568-6.93a.37.37 0 0 0-.374-.4h-4.565a.37.37 0 0 0-.375.4M4.01 8.903c.586-.76.844-1.33.844-2.18v-2.93c0-.99.8-1.79 1.786-1.79h1.088c.986 0 1.786.8 1.786 1.79v2.93c0 .85.258 1.42.843 2.18l.317.42c.745.98 1.15 2.17 1.15 3.4v6.42a2.36 2.36 0 0 1-2.357 2.36H4.9c-1.3 0-2.356-1.06-2.356-2.36v-6.42a5.6 5.6 0 0 1 1.15-3.4zm2.344-2.48v.3c0 1.28-.443 2.17-1.15 3.09l-.317.42a4.1 4.1 0 0 0-.843 2.49v6.42c0 .48.384.86.856.86h4.567c.473 0 .857-.38.857-.86v-1.19H6.936a.746.746 0 0 1-.75-.75c0-.41.336-.75.75-.75h3.388v-1.94H6.935a.753.753 0 0 1-.75-.75c0-.42.336-.75.75-.75h3.389v-.29c0-.9-.297-1.78-.843-2.49l-.316-.42c-.709-.92-1.15-1.8-1.15-3.09v-.3zm1.66-1.5v-1.13c0-.16-.128-.29-.286-.29H6.64a.29.29 0 0 0-.286.29v1.13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrink2Outline;
