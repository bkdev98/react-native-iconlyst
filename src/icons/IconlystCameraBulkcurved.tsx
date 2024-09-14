import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBulkcurved = ({
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
      fillRule="evenodd"
      d="M17.87 6.003a1.4 1.4 0 0 1-.622-.391c-.086-.094-.202-.329-.314-.555-.302-.611-.715-1.447-1.546-1.797-1.068-.448-5.168-.45-6.271-.002-.82.337-1.238 1.177-1.543 1.79-.115.23-.233.468-.321.564a1.4 1.4 0 0 1-.605.387c-3.297.912-3.901 3.055-3.901 6.945 0 5.624 1.372 8.133 9.504 8.133 8.13 0 9.503-2.509 9.503-8.133 0-3.89-.603-6.033-3.884-6.941"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.418 9.377c0 .414.34.75.754.75a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.744.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 16.771a3.9 3.9 0 0 1-3.895-3.896 3.9 3.9 0 0 1 3.896-3.894 3.9 3.9 0 0 1 3.894 3.894 3.9 3.9 0 0 1-3.894 3.896m-2.394-3.895a2.397 2.397 0 0 1 2.395-2.395 2.397 2.397 0 0 1 2.395 2.395 2.397 2.397 0 0 1-2.395 2.395 2.397 2.397 0 0 1-2.395-2.395"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraBulkcurved;
