import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChromeSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.77V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.77-5.53 5.77m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.59 1.58 4.27 4.03 4.27h8.43c2.45 0 4.03-1.68 4.03-4.27V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M15.045 17.862h-6.08c-.63 0-1.23-.34-1.56-.88l-1.4-2.34c-.34-.58-.34-1.29 0-1.86l3.41-5.74c.33-.55.93-.89 1.56-.89h2.03c.63 0 1.23.34 1.56.88l3.42 5.75c.14.24.23.51.25.78v.09c.01.34-.07.68-.25.99l-1.39 2.34c-.32.55-.92.9-1.56.9zm-5.38-1.5h5.38c.11 0 .21-.06.27-.16l1.08-1.81h-5.72zm.67-7.93-3.04 5.11c-.06.1-.06.23 0 .33l1.05 1.76 1.19-2.32s0-.02.01-.03l1.64-3.18-.86-1.67zm3.99 4.46h2l-3.03-5.1a.33.33 0 0 0-.27-.15h-1.4l1.09 2.11v.02l1.61 3.13zm-2.88 0h1.19l-.59-1.15-.59 1.15z"
    />
  </Svg>
);
export default IconlystChromeSquareOutline;
