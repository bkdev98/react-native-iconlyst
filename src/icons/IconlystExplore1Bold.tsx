import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExplore1Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.604 9.138-1.492 4.77a.5.5 0 0 1-.328.328l-4.764 1.49a.497.497 0 0 1-.503-.124.5.5 0 0 1-.124-.503l1.492-4.77a.5.5 0 0 1 .327-.327l4.766-1.49a.498.498 0 0 1 .626.626m3.69 3.731a.75.75 0 0 1 0-1.5h1.95c.117 0 .21-.1.198-.216a9.505 9.505 0 0 0-8.476-8.476.197.197 0 0 0-.216.196V4.82a.75.75 0 0 1-1.5 0V2.873c0-.116-.1-.208-.216-.196a9.504 9.504 0 0 0-8.475 8.476.197.197 0 0 0 .196.216h1.949a.75.75 0 0 1 0 1.5H2.755c-.116 0-.208.1-.196.216a9.504 9.504 0 0 0 8.475 8.477.197.197 0 0 0 .216-.197v-1.956a.75.75 0 0 1 1.5 0v1.956c0 .116.1.208.216.197a9.505 9.505 0 0 0 8.476-8.477.197.197 0 0 0-.197-.216z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExplore1Bold;
