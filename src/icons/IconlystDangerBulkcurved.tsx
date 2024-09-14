import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBulkcurved = ({
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
      d="m19.31 10.693-.212-.374c-2.986-5.31-4.842-7.284-6.848-7.284s-3.862 1.974-6.848 7.284l-.21.374c-1.074 1.882-3.304 5.797-2.89 8.133.488 2.763 3.333 3.209 9.948 3.209s9.461-.446 9.948-3.21c.414-2.335-1.816-6.25-2.888-8.132"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.5 16.43c0 .414.34.75.755.75a.75.75 0 0 0 0-1.5h-.01a.746.746 0 0 0-.744.75M12.25 8.285a.75.75 0 0 0-.75.75v3.895a.75.75 0 0 0 1.5 0V9.035a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystDangerBulkcurved;
