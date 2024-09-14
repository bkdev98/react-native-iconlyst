import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareKeyOutline = ({
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
      d="M3.99 4.184c.985-1.056 2.387-1.647 4.042-1.647h2.435a.75.75 0 0 1 0 1.5H8.032c-1.284 0-2.273.449-2.945 1.17C4.41 5.933 4 6.997 4 8.313v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.79 1.085-3.107v-1.947a.75.75 0 0 1 1.5 0v1.947c0 1.628-.509 3.078-1.487 4.129-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.313c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.15 4.456a3.36 3.36 0 0 0-3.358 3.358c0 .232.032.463.087.715a.75.75 0 0 1-.202.691l-3.658 3.66v1.91h1.766v-.723a.75.75 0 0 1 .75-.75h.772v-.748a.75.75 0 0 1 .75-.75h.672l.627-.625a.75.75 0 0 1 .76-.183 3.365 3.365 0 0 0 4.392-3.197 3.36 3.36 0 0 0-3.358-3.358m-2.343 8.863v.748a.75.75 0 0 1-.75.75h-.772v.224c0 .69-.56 1.25-1.25 1.25H9.768c-.69 0-1.25-.56-1.25-1.25v-2.266c0-.33.132-.648.366-.883l3.454-3.454a4 4 0 0 1-.046-.624 4.858 4.858 0 1 1 3.818 4.747l-.54.539a.75.75 0 0 1-.53.219z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.231 7.353a.316.316 0 0 1 .323.375.75.75 0 1 0 1.479.255 1.816 1.816 0 0 0-1.864-2.128.75.75 0 1 0 .062 1.498"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareKeyOutline;
