import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSuperscriptOutline = ({
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
      d="M4.032 8.688a.75.75 0 0 1 1.054.117L8.5 13.073l3.414-4.268a.75.75 0 1 1 1.172.937L9.46 14.273l3.626 4.532a.75.75 0 0 1-1.172.937L8.5 15.474l-3.414 4.268a.75.75 0 1 1-1.172-.937l3.626-4.531-3.626-4.532a.75.75 0 0 1 .118-1.054M15.849 6.901a2.766 2.766 0 0 1 4.802 2.744 1 1 0 0 1-.087.122l-2.411 2.756H20.5a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1-.565-1.243l3.445-3.937a1.266 1.266 0 0 0-2.229-1.198.75.75 0 0 1-1.302-.744"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSuperscriptOutline;
