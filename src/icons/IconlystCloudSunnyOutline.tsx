import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSunnyOutline = ({
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
      d="M11.033 3.98a.75.75 0 0 1 .557.902l-.006.024a.75.75 0 1 1-1.46-.346l.006-.023a.75.75 0 0 1 .903-.558m-5.765.94a.75.75 0 0 1 1.032.244l.011.018a.75.75 0 0 1-1.276.788l-.011-.018a.75.75 0 0 1 .244-1.032M1.824 9.658a.75.75 0 0 1 .902-.557l.037.009a.75.75 0 0 1-.345 1.46l-.037-.01a.75.75 0 0 1-.557-.902m2.253 4.97a.75.75 0 0 1-.244 1.033l-.018.01a.75.75 0 0 1-.788-1.275l.018-.011a.75.75 0 0 1 1.032.244M10.292 8.294a3.342 3.342 0 0 0-2.916 5.815.75.75 0 0 1-.965 1.148 4.842 4.842 0 1 1 6.34-7.32.75.75 0 0 1-1 1.117 3.3 3.3 0 0 0-1.459-.76"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.756 8.94c.8-1.058 2.083-1.904 3.926-1.904s3.126.846 3.927 1.905a5.66 5.66 0 0 1 1.046 2.432c.898.131 1.724.508 2.368 1.122.81.774 1.282 1.877 1.282 3.198a4.37 4.37 0 0 1-2.6 4.002 4.8 4.8 0 0 1-1.742.346h-8.568a4.7 4.7 0 0 1-1.763-.363 4.37 4.37 0 0 1-2.573-3.985c0-1.321.471-2.424 1.282-3.198.644-.614 1.47-.99 2.368-1.122a5.66 5.66 0 0 1 1.047-2.432m1.196.906c-.574.758-.804 1.669-.804 2.225a.75.75 0 0 1-.743.75c-.828.008-1.534.288-2.028.76-.488.465-.818 1.163-.818 2.112 0 1.16.686 2.159 1.677 2.612.43.173.855.236 1.159.236h8.568c.309 0 .735-.06 1.17-.232a2.87 2.87 0 0 0 1.672-2.616c0-.949-.33-1.647-.818-2.113-.493-.471-1.2-.751-2.027-.759a.75.75 0 0 1-.744-.75c0-.556-.23-1.467-.803-2.225-.55-.728-1.41-1.31-2.73-1.31s-2.18.582-2.731 1.31"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSunnyOutline;
