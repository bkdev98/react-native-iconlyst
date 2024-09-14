import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet4Outline = ({
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
      d="M12.248 4.925c-2.881 0-5.1 2.541-4.711 5.396l.718 5.27a4.03 4.03 0 0 0 7.985 0l.718-5.27a4.754 4.754 0 0 0-4.71-5.396m-3.225 5.193a3.254 3.254 0 1 1 6.449 0l-.718 5.27a2.53 2.53 0 0 1-5.013 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.754 14.998a.75.75 0 0 1 .75-.75h4.439a.75.75 0 1 1 0 1.5h-4.44a.75.75 0 0 1-.75-.75m11.051 0a.75.75 0 0 1 .75-.75h4.437a.75.75 0 1 1 0 1.5h-4.437a.75.75 0 0 1-.75-.75M3.754 12a.75.75 0 0 1 .75-.75h4.02a.75.75 0 0 1 0 1.5h-4.02a.75.75 0 0 1-.75-.75m11.47 0a.75.75 0 0 1 .75-.75h4.019a.75.75 0 1 1 0 1.5h-4.02a.75.75 0 0 1-.75-.75M3.756 9.005a.75.75 0 0 1 .75-.75h3.798a.75.75 0 0 1 0 1.5H4.506a.75.75 0 0 1-.75-.75m11.682 0a.75.75 0 0 1 .75-.75h3.807a.75.75 0 0 1 0 1.5h-3.807a.75.75 0 0 1-.75-.75M11.1 9.4a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.747 21.75H7.753a2.88 2.88 0 0 1-2.115-.929l-1.13-1.231a2.87 2.87 0 0 1-.752-1.94V6.35c-.001-.718.267-1.41.752-1.939L5.637 3.18a2.88 2.88 0 0 1 2.116-.93h8.993a2.88 2.88 0 0 1 2.114.93l1.128 1.23c.487.529.757 1.221.756 1.94v11.3c.001.72-.27 1.413-.757 1.941L18.86 20.82a2.88 2.88 0 0 1-2.114.93m-8.993-18a1.38 1.38 0 0 0-1.011.444l-1.128 1.23c-.23.253-.358.583-.358.926v11.3c0 .343.128.674.359.927l1.127 1.23a1.38 1.38 0 0 0 1.01.443h8.994a1.38 1.38 0 0 0 1.01-.443l1.127-1.231c.232-.252.361-.583.36-.926V6.35c.001-.343-.128-.674-.36-.926l-1.128-1.23a1.37 1.37 0 0 0-1.01-.444z"
    />
  </Svg>
);
export default IconlystToilet4Outline;
