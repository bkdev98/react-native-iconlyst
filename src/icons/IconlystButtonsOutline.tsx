import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystButtonsOutline = ({
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
      d="m19.22 4.78-4.118.458 3.66 3.66zm.121-1.522c.808-.09 1.49.593 1.401 1.4l-.543 4.884c-.117 1.057-1.405 1.51-2.157.757L13.7 5.959c-.752-.753-.3-2.041.757-2.159zM18.04 13.7c.752-.751 2.04-.3 2.158.758l.543 4.883c.09.808-.593 1.49-1.401 1.401l-4.884-.543c-1.057-.117-1.509-1.405-.757-2.157zm.72 1.402-3.66 3.66 4.118.457zM5.958 13.7c-.752-.751-2.04-.3-2.158.758l-.543 4.883c-.09.808.593 1.49 1.401 1.401l4.884-.543c1.057-.117 1.509-1.405.757-2.157zm-.72 1.402 3.66 3.66-4.118.457zM3.258 4.659a1.27 1.27 0 0 1 1.4-1.401l4.884.542c1.057.118 1.51 1.406.757 2.158L5.96 10.3c-.753.752-2.041.3-2.158-.757zm1.523.122.457 4.117 3.66-3.66zM12 10.083a1.917 1.917 0 1 0 0 3.834 1.917 1.917 0 0 0 0-3.834M8.584 12a3.417 3.417 0 1 1 6.833 0 3.417 3.417 0 0 1-6.833 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystButtonsOutline;
