import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchStarOutline = ({
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
      d="m18.707 2.808.632 1.273 1.41.204c.27.036.504.178.66.38l.007.007a1 1 0 0 1-.111 1.335l-1.015.981.245 1.395.003.019a1.004 1.004 0 0 1-.831 1.138l-.006.001a1.03 1.03 0 0 1-.611-.094l-.018-.009-1.262-.66-1.272.665-.012.007a1.013 1.013 0 0 1-1.338-.412l-.008-.014-.006-.012a1 1 0 0 1-.096-.63l.244-1.395L14.295 6l-.006-.006-.007-.007a1.005 1.005 0 0 1 .57-1.701l1.418-.205.631-1.27c.12-.243.329-.422.578-.508l.009-.003c.258-.084.53-.06.762.054l.004.003c.189.094.349.247.45.445zm-.902 1.556-.305.613-.001.002a1.01 1.01 0 0 1-.744.547l-.013.002-.672.097.484.465.006.006c.233.23.344.56.286.89l-.117.664.614-.321a1 1 0 0 1 .947.006l.593.311-.112-.64a1 1 0 0 1 .287-.913l.483-.467-.672-.097h-.005a1.01 1.01 0 0 1-.752-.548l-.001-.002z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.662 12.853a.75.75 0 1 0-1.487-.194 7.4 7.4 0 0 1-2.331 4.491l-.012.013a7.4 7.4 0 0 1-5.023 1.955 7.43 7.43 0 0 1-7.43-7.429 7.43 7.43 0 0 1 6.504-7.372.75.75 0 1 0-.184-1.488 8.93 8.93 0 0 0-7.82 8.86 8.93 8.93 0 0 0 8.93 8.93 8.9 8.9 0 0 0 5.528-1.917l2.836 2.829a.75.75 0 0 0 1.059-1.062l-2.799-2.793a8.9 8.9 0 0 0 2.23-4.823"
    />
  </Svg>
);
export default IconlystSearchStarOutline;
