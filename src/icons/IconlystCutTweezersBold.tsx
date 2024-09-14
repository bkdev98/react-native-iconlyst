import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezersBold = ({
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
      d="M8.22 18a1.35 1.35 0 0 1 0-2.7 1.351 1.351 0 0 1 0 2.7M6.87 7.35c0-.745.605-1.35 1.348-1.35a1.351 1.351 0 0 1 0 2.7 1.35 1.35 0 0 1-1.348-1.35m8.097 4.647 5.51-5.104a1.001 1.001 0 0 0-1.36-1.467l-5.62 5.207-2.18-2.023c.158-.39.25-.814.25-1.26A3.353 3.353 0 0 0 8.22 4a3.353 3.353 0 0 0-3.348 3.35A3.353 3.353 0 0 0 8.22 10.7c.672 0 1.297-.203 1.822-.546l1.986 1.842-1.993 1.846A3.3 3.3 0 0 0 8.22 13.3a3.353 3.353 0 0 0-3.348 3.349A3.353 3.353 0 0 0 8.22 20a3.353 3.353 0 0 0 3.35-3.351c0-.449-.093-.876-.254-1.267l2.182-2.022 5.621 5.213a1.001 1.001 0 0 0 1.36-1.467z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCutTweezersBold;
