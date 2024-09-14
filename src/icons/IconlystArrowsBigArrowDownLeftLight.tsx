import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownLeftLight = ({
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
      d="m4.508 18.498.748.044zm.542-9.214L4.3 9.24zm.802-.306.53-.53zm2.588 2.588-.53.53a.75.75 0 0 0 1.06 0zM12.406 7.6l-.53-.53zm1.331 0-.53.53zm2.663 2.663.53-.53zm0 1.331-.53-.53zm-3.965 3.966-.53-.53a.75.75 0 0 0 0 1.06zm2.587 2.588-.53.53zm-.305.803-.044-.749zm-9.214.542.044.749zm-.247-.951.542-9.214-1.497-.088-.542 9.214zm.066-9.033 2.588 2.587 1.06-1.06-2.587-2.588zm3.648 2.587 3.966-3.966-1.06-1.06-3.966 3.966zm4.237-3.966 2.663 2.663 1.06-1.06-2.662-2.663zm2.663 2.934-3.966 3.966 1.06 1.06 3.967-3.965zm-3.966 5.027 2.588 2.587 1.06-1.06-2.587-2.588zm2.769 2.111-9.214.542.088 1.497 9.214-.542zm-.181.476a.28.28 0 0 1 .18-.476l.089 1.497c1.051-.061 1.536-1.337.791-2.081zm1.378-7.885a.19.19 0 0 1 0 .271l1.06 1.06c.661-.66.661-1.73 0-2.391zM12.936 8.13a.19.19 0 0 1 .271 0l1.06-1.06a1.69 1.69 0 0 0-2.391 0zM5.798 9.328a.28.28 0 0 1-.476.18l1.06-1.06c-.744-.745-2.02-.26-2.081.792zm-2.04 9.126a1.692 1.692 0 0 0 1.789 1.787l-.088-1.497a.192.192 0 0 1-.203-.202z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15.525 4.506 3.97 3.97"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownLeftLight;
