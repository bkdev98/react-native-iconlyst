import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiktokCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.64 6.701a.75.75 0 0 1 .832.504c.092.275.333.735.735 1.117.39.37.909.648 1.592.648a.75.75 0 0 1 0 1.5c-.945 0-1.707-.33-2.288-.774v4.584a3.03 3.03 0 0 1-3.03 3.028 3.03 3.03 0 0 1-3.03-3.028 3.03 3.03 0 0 1 3.03-3.03.75.75 0 1 1 0 1.5c-.846 0-1.53.682-1.53 1.53 0 .845.684 1.528 1.53 1.528.845 0 1.53-.683 1.53-1.528V7.44a.75.75 0 0 1 .63-.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiktokCircleOutline;
