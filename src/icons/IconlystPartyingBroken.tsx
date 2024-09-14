import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.822 9.248A9 9 0 0 0 12.25 3a9 9 0 0 0-9 9 8.96 8.96 0 0 0 1.028 4.18M18.55 18.5l-.829.646A8.96 8.96 0 0 1 12.25 21a8.96 8.96 0 0 1-5.772-2.095M15.545 15.42h3.917c.859 0 1.555-.697 1.555-1.555v-.149a1.405 1.405 0 1 0-2.811 0v.036M12.188 16.663c.682-.21 1.12-.531 1.12-.892 0-.379-.767-.805-.767-.805s.766-.407.766-.766c0-.31-.421-.587-1.083-.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.368 9.808c.264-.345.654-.56 1.087-.56s.824.215 1.088.56M13.836 9.808c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.25 3.5l-7-1.5 1.5 7M3.25 5.5 4.5 4.25"
    />
  </Svg>
);
export default IconlystPartyingBroken;
