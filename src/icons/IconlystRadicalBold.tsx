import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadicalBold = ({
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
      d="M3.923 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.931.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.782c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.494-2.962 1.423-3.958m9.741 3.236a2.88 2.88 0 0 0-2.772 2.1l-1.476 5.232-.854-2.371a2.73 2.73 0 0 0-1.995-1.744.75.75 0 0 0-.315 1.466c.415.09.754.386.899.786l1.114 3.095c.414 1.147 2.055 1.087 2.386-.085l1.684-5.973a1.38 1.38 0 0 1 1.33-1.006h2.854a.75.75 0 0 0 0-1.5zm.9 4.73a.75.75 0 0 0-1.207.89l.95 1.288-.95 1.29a.75.75 0 0 0 1.207.89l.675-.916.675.916a.75.75 0 0 0 1.207-.89l-.95-1.29.95-1.289a.75.75 0 1 0-1.207-.89l-.675.916z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadicalBold;
