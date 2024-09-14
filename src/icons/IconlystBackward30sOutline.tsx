import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward30sOutline = ({
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
      d="M13 4.5a7.5 7.5 0 0 0-7.498 7.33.75.75 0 0 1-1.5-.034A9 9 0 1 1 5.59 17.11a.75.75 0 0 1 1.235-.853A7.5 7.5 0 1 0 13 4.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.875 9.151a.75.75 0 0 1 1.025.275l.906 1.57 1.557-.898a.75.75 0 0 1 .75 1.3L4.905 12.67a.75.75 0 0 1-1.024-.275l-1.28-2.22a.75.75 0 0 1 .274-1.025M8.424 10.555A2.195 2.195 0 1 1 12.272 12a2.196 2.196 0 1 1-3.848 1.445.75.75 0 0 1 1.5 0 .696.696 0 1 0 .696-.695.75.75 0 0 1 0-1.5.696.696 0 1 0-.696-.695.75.75 0 0 1-1.5 0M15.79 9.902a.935.935 0 0 0-.934.936v2.323a.935.935 0 0 0 1.87 0v-2.323a.935.935 0 0 0-.935-.936m-2.434.936a2.435 2.435 0 0 1 4.87 0v2.323a2.435 2.435 0 0 1-4.87 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward30sOutline;
