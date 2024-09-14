import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar2Bold = ({
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
      d="M3.923 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.931.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.782c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.494-2.962 1.423-3.958m8.821 4.917a.75.75 0 0 0-1.5 0v2.266l-2.051-.727a.75.75 0 0 0-.501 1.413l2.064.732-1.476 1.867a.75.75 0 0 0 1.176.93l1.538-1.945 1.55 1.96a.75.75 0 0 0 1.177-.93l-1.49-1.883 2.078-.736a.75.75 0 0 0-.501-1.414l-2.064.731z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar2Bold;
