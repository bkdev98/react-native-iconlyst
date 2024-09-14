import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCloudBold = ({
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
      d="M11.588 15.97c.59-1.44 1.94-2.812 4.128-2.812 2.186 0 3.536 1.37 4.127 2.81.043.018.081.044.123.063V9.027a.435.435 0 0 0-.434-.439H16.57c-1.766-.01-3.223-1.472-3.223-3.255V2.195a.445.445 0 0 0-.444-.449H7.75c-2.402 0-4.352 1.98-4.352 4.396v10.506c0 2.534 2.046 4.59 4.555 4.59h1.511a4 4 0 0 1-.3-1.518c.008-1.72.978-3.132 2.424-3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.698 7.164c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787L17.5 4.357l-1.955-2.053a.46.46 0 0 0-.793.325V5.2c0 1.077.88 1.965 1.946 1.965M18.456 20.656c-.227.09-.42.1-.491.1h-4.5a1.3 1.3 0 0 1-.454-.09 1.15 1.15 0 0 1-.68-1.048c.005-.845.618-1.15 1.142-1.154a.75.75 0 0 0 .744-.75c0-.298.266-1.501 1.5-1.501s1.5 1.203 1.5 1.5c0 .412.332.747.744.75.552.005 1.14.31 1.14 1.152 0 .455-.264.868-.645 1.04m.174-3.614c-.278-1.107-1.223-2.33-2.913-2.33-1.691 0-2.636 1.223-2.913 2.33-1.17.28-1.966 1.278-1.972 2.57-.005 1.039.606 1.989 1.589 2.433.336.136.707.21 1.044.21h4.5a2.9 2.9 0 0 0 1.078-.22 2.66 2.66 0 0 0 1.559-2.42c0-1.294-.798-2.294-1.972-2.573"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentCloudBold;
