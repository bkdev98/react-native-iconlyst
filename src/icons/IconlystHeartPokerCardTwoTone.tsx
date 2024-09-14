import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPokerCardTwoTone = ({
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
      d="M15.5 3h-6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 6v.01M8.5 18v.01M12.5 9.494a2.24 2.24 0 0 0-.922-.618c-1.361-.483-2.634.483-2.778 1.836-.201 2.039 1.981 3.293 3.343 4.411a.56.56 0 0 0 .562.087c.089-.034.16-.098.232-.157 1.374-1.126 3.544-2.42 3.247-4.473-.22-1.435-1.717-2.24-3.009-1.6a2.2 2.2 0 0 0-.675.514"
    />
  </Svg>
);
export default IconlystHeartPokerCardTwoTone;
