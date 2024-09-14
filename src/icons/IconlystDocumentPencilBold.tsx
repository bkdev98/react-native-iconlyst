import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPencilBold = ({
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
      d="M16.768 7.236c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787L17.57 4.43l-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.88 1.965 1.946 1.965"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.668 14.63H6.94a.75.75 0 1 1 0-1.5h4.73a.75.75 0 0 1 0 1.5m-4.73-5.628h2.47a.75.75 0 0 1 0 1.5h-2.47a.75.75 0 1 1 0-1.5m8.057 4.364a3.06 3.06 0 0 1 4.174-1.12l.78.451c.032.018.057.043.087.063V9.098a.434.434 0 0 0-.434-.438H16.64c-1.766-.01-3.223-1.472-3.223-3.255V2.266a.445.445 0 0 0-.444-.448H7.82c-2.402 0-4.352 1.978-4.352 4.395V16.72c0 2.534 2.046 4.591 4.555 4.591h4.334c-.038-.114-.083-.225-.107-.344l-.134-.669a3.94 3.94 0 0 1 .45-2.724z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.992 15.731-2.428 4.205a1.18 1.18 0 0 1-.636.524l-.675.206-.134-.672a1.18 1.18 0 0 1 .135-.814l2.428-4.206a.31.31 0 0 1 .418-.112l.78.45a.31.31 0 0 1 .112.419m.638-1.718-.781-.45a1.81 1.81 0 0 0-2.465.661l-2.43 4.207a2.68 2.68 0 0 0-.306 1.856l.134.671a1.518 1.518 0 0 0 1.976 1.143l.65-.221a2.67 2.67 0 0 0 1.455-1.194l2.429-4.206a1.81 1.81 0 0 0-.662-2.467"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPencilBold;
