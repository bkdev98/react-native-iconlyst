import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoveMessageLikeOutline = ({
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
      d="M7.794 20.85a5.05 5.05 0 0 1-3.644-1.482 5.96 5.96 0 0 1-1.673-4.274V8.912a5.437 5.437 0 0 1 5.33-5.762h8.838a5.44 5.44 0 0 1 5.332 5.762v6.182a5.96 5.96 0 0 1-1.674 4.274 5.05 5.05 0 0 1-3.647 1.482zm.012-1.5h8.839c.968.001 1.9-.373 2.6-1.044a4.48 4.48 0 0 0 1.234-3.212V8.912c0-2.469-1.612-4.262-3.832-4.262H7.81c-2.22 0-3.831 1.793-3.831 4.262v6.182a4.47 4.47 0 0 0 1.233 3.212 3.58 3.58 0 0 0 2.586 1.044z"
    />
    <Path
      fill={props.color}
      d="M3.899 18.477a.75.75 0 0 1-.424-1.369l3.753-2.574a.751.751 0 1 1 .847 1.237l-3.753 2.575a.75.75 0 0 1-.423.131M20.556 18.475a.75.75 0 0 1-.424-.13l-3.752-2.576a.75.75 0 0 1 .849-1.236l3.752 2.574a.75.75 0 0 1-.425 1.368M6.905 9.088a.75.75 0 0 1-.423-.13L3.476 6.895a.75.75 0 1 1 .847-1.237L7.33 7.72a.75.75 0 0 1-.425 1.368M17.563 9.088a.75.75 0 0 1-.425-1.368l3-2.061a.75.75 0 1 1 .849 1.237l-3 2.06a.75.75 0 0 1-.424.132M12.738 15.59a.7.7 0 0 1-.356-.037c-.115-.044-2.837-1.075-3.752-2.956a2.784 2.784 0 0 1 1.14-3.8 2.67 2.67 0 0 1 1.981-.138 2.7 2.7 0 0 1 1.929-.421 2.784 2.784 0 0 1 2.164 3.33c-.335 2.037-2.674 3.812-2.772 3.885a.7.7 0 0 1-.334.138m-2.804-3.627a5.6 5.6 0 0 0 2.58 2.073 5.62 5.62 0 0 0 1.898-2.708 1.353 1.353 0 0 0-.973-1.66 1.23 1.23 0 0 0-1.061.341.725.725 0 0 1-.862.123 1.21 1.21 0 0 0-1.116-.03 1.355 1.355 0 0 0-.469 1.862z"
    />
  </Svg>
);
export default IconlystLoveMessageLikeOutline;
