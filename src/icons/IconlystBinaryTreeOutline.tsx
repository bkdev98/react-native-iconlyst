import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinaryTreeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 18.823a2.55 2.55 0 0 0 2.55 2.55h3.084a2.55 2.55 0 0 0 2.55-2.55v-.904a2.55 2.55 0 0 0-2.55-2.55H5.8a2.55 2.55 0 0 0-2.55 2.55zm2.55 1.05c-.58 0-1.05-.47-1.05-1.05v-.904c0-.58.47-1.05 1.05-1.05h3.084c.58 0 1.05.47 1.05 1.05v.904c0 .58-.47 1.05-1.05 1.05zM13.566 18.823a2.55 2.55 0 0 0 2.55 2.55H19.2a2.55 2.55 0 0 0 2.55-2.55v-.904a2.55 2.55 0 0 0-2.55-2.55h-3.084a2.55 2.55 0 0 0-2.55 2.55zm2.55 1.05c-.58 0-1.05-.47-1.05-1.05v-.904c0-.58.47-1.05 1.05-1.05H19.2c.58 0 1.05.47 1.05 1.05v.904c0 .58-.47 1.05-1.05 1.05zM8.481 6.319a2.55 2.55 0 0 0 2.55 2.55h3.084a2.55 2.55 0 0 0 2.55-2.55v-.905a2.55 2.55 0 0 0-2.55-2.55H11.03a2.55 2.55 0 0 0-2.55 2.55zm2.55 1.05c-.58 0-1.05-.47-1.05-1.05v-.905c0-.58.47-1.05 1.05-1.05h3.084c.58 0 1.05.47 1.05 1.05v.905c0 .58-.47 1.05-1.05 1.05z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.67 16.632a.75.75 0 0 0 1.06.034l4.77-4.472 4.77 4.472a.75.75 0 1 0 1.026-1.094l-5.046-4.73V8.118a.75.75 0 0 0-1.5 0v2.722l-5.046 4.73a.75.75 0 0 0-.034 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBinaryTreeOutline;
