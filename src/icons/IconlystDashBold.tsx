import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashBold = ({
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
      d="M13.632 4.13H7.42a.5.5 0 0 0-.486.384l-.867 3.64a.498.498 0 0 0 .486.616h6.486a3.19 3.19 0 0 1 3.184 3.19 3.186 3.186 0 0 1-3.184 3.18h-7.44a.5.5 0 0 0-.483.376l-.954 3.73a.498.498 0 0 0 .484.624h8.986c4.338 0 7.868-3.531 7.868-7.87s-3.53-7.87-7.868-7.87"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.058 13.423.66-2.6a.5.5 0 0 0-.484-.623H3.649a.5.5 0 0 0-.485.379l-.65 2.6A.502.502 0 0 0 3 13.8h7.575a.5.5 0 0 0 .484-.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashBold;
