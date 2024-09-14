import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodSpottingSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.02c0-3.45 2.22-5.77 5.53-5.77h8.43c3.31 0 5.53 2.32 5.53 5.77v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.27v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.02c0-2.59-1.58-4.27-4.03-4.27z"
    />
    <Path
      fill={props.color}
      d="M12.015 17.703c-1.49 0-2.96-.58-4.06-1.67-1.78-1.77-2.18-4.56-.97-6.78a5.75 5.75 0 0 1 5.36-2.95c.4.03.74.26.91.62.18.39.14.87-.12 1.23-.38.51-.48 1.17-.27 1.77a1.95 1.95 0 0 0 1.85 1.32c.4 0 .81-.13 1.14-.38.36-.26.84-.3 1.23-.12.36.17.59.51.62.91a5.72 5.72 0 0 1-2.95 5.35c-.85.47-1.79.7-2.73.7zm-.42-9.89a4.22 4.22 0 0 0-3.29 2.16c-.89 1.63-.6 3.69.71 5 1.32 1.32 3.38 1.62 5 .72a4.27 4.27 0 0 0 2.17-3.29c-.46.22-.96.34-1.48.34-1.48 0-2.8-.94-3.27-2.34-.29-.86-.23-1.79.16-2.59"
    />
  </Svg>
);
export default IconlystFoodSpottingSquareOutline;
