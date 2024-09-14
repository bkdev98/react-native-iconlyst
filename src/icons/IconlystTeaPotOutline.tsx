import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeaPotOutline = ({
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
      d="M19.156 19.123a6.95 6.95 0 0 1-1.65 2.467c-.544.53-1.27.8-2 .8H9.903c-.743 0-1.47-.28-2.016-.81a6.93 6.93 0 0 1-1.896-3.269.8.8 0 0 1-.104-.131L2.363 12.5a.75.75 0 0 1-.018-.76.75.75 0 0 1 .655-.39h1.492c.121 0 .24.03.347.09l2.21 1.148a6.9 6.9 0 0 1 3.748-2.639A2.078 2.078 0 0 1 12.7 7.03a2.08 2.08 0 0 1 1.9 2.929 6.9 6.9 0 0 1 2.501 1.31 4.27 4.27 0 0 1 2.628-.528c1.121.14 2.208.77 2.722 2.01.59 1.42.243 2.9-.494 4.06-.66 1.035-1.68 1.884-2.802 2.313m-.955-6.721a6.88 6.88 0 0 1 1.405 4.766c.42-.316.798-.716 1.087-1.168.554-.87.725-1.83.373-2.68-.27-.65-.832-1.01-1.52-1.09a2.8 2.8 0 0 0-1.345.172m-1.754.285c-1.233-1.173-3.02-1.77-4.933-1.367a5.38 5.38 0 0 0-3.38 2.34h9.123a5.4 5.4 0 0 0-.672-.837.8.8 0 0 1-.127-.123zm1.486 2.473c.127.461.195.947.195 1.45 0 1.53-.637 2.91-1.662 3.9a1.38 1.38 0 0 1-.96.38H9.903c-.369 0-.719-.14-.973-.39-1.293-1.25-1.967-3.14-1.505-5.17q.02-.086.042-.17zM6.318 13.897l-1.952-1.013 1.527 2.46q.03-.171.07-.344a6.6 6.6 0 0 1 .355-1.103M13.28 9.11a.58.58 0 1 0-1.16.001.58.58 0 0 0 1.16-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.491 2.22a.75.75 0 0 1 0 1.06.62.62 0 0 0 0 .88c.83.83.83 2.17 0 3A.75.75 0 1 1 7.43 6.1a.62.62 0 0 0 0-.88 2.12 2.12 0 0 1 0-3 .756.756 0 0 1 1.061 0M3.964 6.1a.755.755 0 0 1 1.06 0c.829.83.829 2.17 0 3a.749.749 0 1 1-1.06-1.06.62.62 0 0 0 0-.88.75.75 0 0 1 0-1.06"
    />
  </Svg>
);
export default IconlystTeaPotOutline;