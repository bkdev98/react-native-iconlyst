import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSquareBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.122 5.531 5.282 5.531h8.434c3.16 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.384 15.43H7.277a.75.75 0 0 1-.75-.75V9.29a.75.75 0 0 1 .75-.75h1.107a3.45 3.45 0 0 1 3.447 3.45 3.447 3.447 0 0 1-3.447 3.44m-.357-5.39h.357a1.945 1.945 0 1 1 0 3.89h-.357zM17.476 13.36a2.11 2.11 0 0 1-2.11 2.11h-1.772a.75.75 0 0 1-.75-.75V9.28a.75.75 0 0 1 .75-.75h1.772c1.164 0 2.11.946 2.11 2.11 0 .52-.197.991-.51 1.36.313.368.51.84.51 1.36m-3.132-.61h1.022a.61.61 0 0 1 0 1.22h-1.022zm1.022-2.72a.61.61 0 1 1 0 1.22h-1.022v-1.22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseSquareBulk;
