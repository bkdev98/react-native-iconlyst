import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneStarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.75 14.934.725 1.457a.25.25 0 0 0 .187.137l1.622.234c.066.01.125.043.166.096a.24.24 0 0 1-.028.323l-1.175 1.137a.24.24 0 0 0-.07.22l.281 1.604a.246.246 0 0 1-.204.278.26.26 0 0 1-.162-.025l-1.444-.757a.24.24 0 0 0-.232 0l-1.456.762a.256.256 0 0 1-.337-.103.26.26 0 0 1-.025-.157l.282-1.605a.25.25 0 0 0-.071-.218l-1.182-1.137a.247.247 0 0 1 0-.348.3.3 0 0 1 .142-.07l1.621-.235a.26.26 0 0 0 .188-.137l.724-1.456q.047-.092.143-.125a.25.25 0 0 1 .192.014.26.26 0 0 1 .113.11"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.361 20.071h7.255M3.838 13.013c1.237-.514 3.68-1.563 4.939-2.086l-2.308-5.59c.625-.222 1.196-.48 1.796-.625.7-.167 1.302.151 1.817.602a189 189 0 0 1 3.515 3.135c.291.269.522.294.871.141 1.003-.442 2.01-.884 3.042-1.256 1.192-.43 2.89-.475 3.312 1.029.332 1.186-.69 2.197-1.696 2.62a938 938 0 0 1-4.516 1.893"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.249 11.603c.09.214.438 1.06.528 1.273 1.016 2.383 2.911 3.222 5.306 2.261q1.1-.44 2.197-.889"
    />
  </Svg>
);
export default IconlystPlaneStarBroken;
