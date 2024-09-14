import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarRunBulk = ({
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
      d="M21.605 12.43c.194-.178.32-.426.357-.701a1.18 1.18 0 0 0-.24-.886 1.16 1.16 0 0 0-.78-.445l-3.177-.46a.7.7 0 0 1-.529-.384l-1.418-2.83v-.002a1.2 1.2 0 0 0-.518-.517 1.2 1.2 0 0 0-.918-.086 1.22 1.22 0 0 0-.72.605L12.244 9.56a.72.72 0 0 1-.534.378l-3.16.459a1.12 1.12 0 0 0-.71.354 1.18 1.18 0 0 0 .032 1.675l2.3 2.213a.66.66 0 0 1 .197.604l-.542 3.123a1.193 1.193 0 0 0 1.188 1.393c.193 0 .385-.048.56-.141l2.834-1.47a.74.74 0 0 1 .662 0l2.83 1.467c.227.124.489.169.757.128a1.195 1.195 0 0 0 .998-1.38l-.544-3.12a.67.67 0 0 1 .203-.607z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.777 13.636h1.297a.75.75 0 0 0 0-1.5H3.777a.75.75 0 0 0 0 1.5M3.777 7.506h5.112a.75.75 0 0 0 0-1.5H3.777a.75.75 0 0 0 0 1.5M6.483 18.326H3.777a.75.75 0 0 0 0 1.5h2.706a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarRunBulk;
