import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPlusAddOutline = ({
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
      d="M7.817 20.85a5.05 5.05 0 0 1-3.643-1.48A5.96 5.96 0 0 1 2.5 15.09V8.913A5.44 5.44 0 0 1 7.832 3.15h8.836A5.44 5.44 0 0 1 22 8.913v2.577a.75.75 0 1 1-1.5 0V8.913c0-2.47-1.612-4.263-3.832-4.263H7.832C5.612 4.65 4 6.443 4 8.913v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.586 1.043h5.248a.75.75 0 1 1 0 1.5H7.817z"
    />
    <Path
      fill={props.color}
      d="M18.74 20.523a.75.75 0 0 1-.75-.75v-1.76h-1.76a.75.75 0 1 1 0-1.5h1.76v-1.76a.75.75 0 1 1 1.5 0v1.76h1.76a.75.75 0 1 1 0 1.5h-1.76v1.76a.75.75 0 0 1-.75.75M12.274 13.62a2.8 2.8 0 0 1-1.75-.615L6.486 9.75a.75.75 0 1 1 .942-1.168l4.033 3.252a1.31 1.31 0 0 0 1.637 0l3.991-3.246a.75.75 0 0 1 .946 1.164l-4 3.252c-.5.399-1.121.615-1.76.615"
    />
  </Svg>
);
export default IconlystEmailPlusAddOutline;
