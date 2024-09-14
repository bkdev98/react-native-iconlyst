import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieCloseBold = ({
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
      d="M15.347 6.43a.3.3 0 0 1-.3.299h-4.428a.3.3 0 0 1-.3-.3c-.002-1.152-.009-2.927-.012-3.629 0-.166.134-.3.3-.3h4.452c.167 0 .301.134.3.3-.003.704-.01 2.486-.012 3.63M17.147 6.729a.3.3 0 0 1-.3-.3c-.002-1.143-.01-2.925-.013-3.629 0-.166.135-.3.3-.292 2.294.122 4.101 1.637 4.599 3.876a.286.286 0 0 1-.286.345z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.085 8.23a.3.3 0 0 0-.3.3v7.7c0 3.151 2.027 5.27 5.044 5.27h8.012c3.016 0 5.043-2.119 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3zm11.034 8.36a.75.75 0 0 0 0-1.061l-1.224-1.225 1.224-1.224a.751.751 0 0 0-1.062-1.061l-1.222 1.224-1.223-1.224a.75.75 0 1 0-1.061 1.06l1.224 1.225-1.224 1.225a.75.75 0 1 0 1.061 1.06l1.223-1.223 1.222 1.224a.75.75 0 0 0 1.062 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.82 6.43a.3.3 0 0 1-.3.299H4.221a.286.286 0 0 1-.286-.345c.497-2.237 2.304-3.753 4.595-3.876a.287.287 0 0 1 .3.292c-.003.704-.01 2.486-.012 3.63"
    />
  </Svg>
);
export default IconlystMovieCloseBold;
