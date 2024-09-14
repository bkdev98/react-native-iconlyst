import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathBold = ({
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
      d="M18.486 20.759a1.9 1.9 0 0 1-1.521-.744 1 1 0 0 0-.062-.07 1.93 1.93 0 0 1-.367-1.136c0-1.075.874-1.95 1.95-1.95.41 0 .802.126 1.136.366a1 1 0 0 0 .07.062c.473.365.744.919.744 1.522 0 1.075-.875 1.95-1.95 1.95m-12.6 0a1.953 1.953 0 0 1-1.95-1.95c0-.603.27-1.157.743-1.522a1 1 0 0 0 .069-.061 1.953 1.953 0 0 1 3.088 1.583c0 .439-.144.854-.416 1.2a1.94 1.94 0 0 1-1.534.75m0-16.5c.6 0 1.16.273 1.534.749.272.346.416.76.416 1.2 0 1.076-.875 1.95-1.95 1.95-.44 0-.855-.143-1.202-.415a1.94 1.94 0 0 1-.748-1.534c0-1.075.875-1.95 1.95-1.95m11.079.744a1.9 1.9 0 0 1 1.52-.744c1.076 0 1.95.875 1.95 1.95a1.94 1.94 0 0 1-.747 1.533 1.93 1.93 0 0 1-1.203.417 1.953 1.953 0 0 1-1.95-1.95c0-.412.127-.803.366-1.136a1 1 0 0 0 .064-.07m4.72 7.506a9.4 9.4 0 0 0-.827-3.827 3.4 3.4 0 0 0 1.078-2.473 3.454 3.454 0 0 0-3.45-3.45c-.954 0-1.83.398-2.472 1.077a9.3 9.3 0 0 0-3.828-.827 9.4 9.4 0 0 0-3.827.828c-.65-.678-1.525-1.078-2.473-1.078a3.454 3.454 0 0 0-3.45 3.45c0 .948.399 1.824 1.078 2.473a9.4 9.4 0 0 0-.828 3.827c0 1.346.289 2.627.827 3.828a3.38 3.38 0 0 0-1.077 2.472 3.454 3.454 0 0 0 3.45 3.45c.949 0 1.824-.4 2.473-1.08a9.4 9.4 0 0 0 3.826.83c1.345 0 2.625-.29 3.829-.828a3.38 3.38 0 0 0 2.471 1.078 3.454 3.454 0 0 0 3.45-3.45c0-.954-.397-1.83-1.077-2.472a9.3 9.3 0 0 0 .828-3.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathBold;