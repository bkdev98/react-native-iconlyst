import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxOutline = ({
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
      d="M6.672 4.113c0-1.03.836-1.863 1.864-1.863h4.844c1.029 0 1.863.834 1.863 1.863v1.855l1.363 1.32c.636.616.994 1.463.994 2.348a.75.75 0 1 1-1.5 0c0-.48-.194-.938-.537-1.27L13.97 6.825a.75.75 0 0 1-.228-.54V4.114c0-.2-.163-.363-.363-.363H8.536a.364.364 0 0 0-.364.363v2.173a.75.75 0 0 1-.228.538L6.353 8.366c-.343.332-.538.79-.538 1.27v8.724c0 .977.792 1.769 1.769 1.769h3.072a.75.75 0 0 1 0 1.5H7.584a3.27 3.27 0 0 1-3.269-3.269V9.636c0-.885.359-1.732.994-2.348l1.363-1.32z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.956 9.898a.75.75 0 0 1 .75.75v3.448a.75.75 0 0 1-1.5 0v-3.448a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.482 12.375a.75.75 0 0 1 .75-.75h3.449a.75.75 0 0 1 0 1.5H9.232a.75.75 0 0 1-.75-.75M4.373 17.91a.75.75 0 0 1 .75-.75h6.155a.75.75 0 1 1 0 1.5H5.123a.75.75 0 0 1-.75-.75M6.672 6.285a.75.75 0 0 1 .75-.75h7.07a.75.75 0 0 1 0 1.5h-7.07a.75.75 0 0 1-.75-.75M17.781 13.438a1.415 1.415 0 0 0-1.832.803l-1.59 4.077a1.416 1.416 0 0 0 2.637 1.028m0 0 1.59-4.076a1.415 1.415 0 0 0-.805-1.832m.545-1.398a2.915 2.915 0 0 0-3.775 1.656l-1.59 4.077a2.916 2.916 0 0 0 5.433 2.119l1.59-4.077a2.916 2.916 0 0 0-1.658-3.775"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.757 15.736a.75.75 0 0 1 .97-.427l4.035 1.574a.75.75 0 1 1-.545 1.397l-4.034-1.573a.75.75 0 0 1-.426-.972"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPillsBoxOutline;
