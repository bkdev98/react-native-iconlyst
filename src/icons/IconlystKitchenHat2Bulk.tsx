import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat2Bulk = ({
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
      d="M3.924 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.93.567 3.862 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.495-2.962 1.424-3.958"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m9.085 15.109-.11-1.527a2.46 2.46 0 0 1-1.752-2.19c-.075-1.084.663-2.027 1.66-2.455.465-.198.78-.201 1.095-.158a2.31 2.31 0 0 1 2.02-1.199c.875 0 1.625.485 2.02 1.199.282-.037.531-.04.934.085.927.29 1.687 1.065 1.81 2.026a2.46 2.46 0 0 1-1.735 2.692l-.11 1.527a1.41 1.41 0 0 1-1.408 1.309h-3.017a1.41 1.41 0 0 1-1.407-1.31"
    />
  </Svg>
);
export default IconlystKitchenHat2Bulk;
