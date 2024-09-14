import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultitaskingOutline = ({
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
      d="M6.846 7.07a2.38 2.38 0 0 0-2.378 2.38v5.074a2.38 2.38 0 0 0 2.378 2.378h10.808a2.38 2.38 0 0 0 2.379-2.379V9.45a2.38 2.38 0 0 0-2.38-2.379zM2.968 9.45a3.88 3.88 0 0 1 3.878-3.88h10.808a3.88 3.88 0 0 1 3.879 3.88v5.074a3.88 3.88 0 0 1-3.88 3.878H6.847a3.88 3.88 0 0 1-3.878-3.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.708 16.941a.75.75 0 0 1 .75.75v1.363c0 .454.17.726.423.91.284.206.735.342 1.323.342h6.094c.594 0 1.044-.136 1.326-.342.25-.182.42-.454.42-.91V17.69a.75.75 0 0 1 1.5 0v1.363c0 .918-.385 1.647-1.037 2.122-.62.453-1.417.63-2.209.63H9.204c-.788 0-1.584-.178-2.205-.63-.651-.473-1.041-1.202-1.041-2.122V17.69a.75.75 0 0 1 .75-.75M7.881 4.018c-.252.184-.423.456-.423.91V6.29a.75.75 0 1 1-1.5 0V4.928c0-.92.39-1.65 1.041-2.123.62-.451 1.417-.63 2.205-.63h6.094c.792 0 1.59.178 2.21.63.65.475 1.036 1.205 1.036 2.123V6.29a.75.75 0 0 1-1.5 0V4.928c0-.456-.17-.728-.42-.91-.282-.206-.732-.342-1.326-.342H9.204c-.588 0-1.039.136-1.323.342"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMultitaskingOutline;
