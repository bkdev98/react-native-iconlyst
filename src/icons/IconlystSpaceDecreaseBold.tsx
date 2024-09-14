import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceDecreaseBold = ({
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
      d="M17.684 22H6.316a1 1 0 1 1 0-2h11.368a1 1 0 1 1 0 2M17.684 4H6.316a1 1 0 1 1 0-2h11.368a1 1 0 1 1 0 2M14.64 17.87a1 1 0 0 1-.697-.284l-1.977-1.922-1.975 1.922a1 1 0 0 1-1.395-1.434l2.673-2.6a1 1 0 0 1 1.394 0l2.674 2.6a1 1 0 0 1-.697 1.717M11.965 10.79a1 1 0 0 1-.698-.285l-2.673-2.61A1 1 0 1 1 9.99 6.462l1.975 1.93 1.975-1.93a1 1 0 1 1 1.396 1.431l-2.673 2.611a1 1 0 0 1-.698.284"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceDecreaseBold;
