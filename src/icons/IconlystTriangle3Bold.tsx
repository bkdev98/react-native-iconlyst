import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.598 17.051a.75.75 0 0 1-1.024.274l-2.428-1.398a.3.3 0 0 0-.3 0l-2.395 1.387a.75.75 0 1 1-.75-1.299l2.395-1.386a.3.3 0 0 0 .15-.26v-2.7a.75.75 0 0 1 1.5 0v2.698a.3.3 0 0 0 .15.26l2.427 1.4a.75.75 0 0 1 .275 1.024m2.648 2.492a.75.75 0 0 1 .75-1.299l2.054 1.184c.166.096.378.013.41-.175a2.44 2.44 0 0 0-.29-1.62l-6.96-12.21a2.47 2.47 0 0 0-1.091-1.016c-.181-.086-.374.058-.374.258v2.894a.75.75 0 0 1-1.5 0V4.723c0-.206-.202-.35-.383-.254-.4.212-.74.529-.978.941L2.836 17.621a2.44 2.44 0 0 0-.295 1.631c.031.189.244.271.41.176l2.097-1.207a.751.751 0 0 1 .748 1.301l-1.902 1.095c-.186.107-.2.368-.01.467a2.4 2.4 0 0 0 1.111.277h14.008c.401 0 .778-.101 1.115-.278.19-.1.175-.36-.01-.467z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangle3Bold;
