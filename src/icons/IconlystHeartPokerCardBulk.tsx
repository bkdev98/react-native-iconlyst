import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPokerCardBulk = ({
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
      d="M15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 6.76a.75.75 0 0 0 .75-.75V6a.746.746 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75m-2.546 8.446.075-.058c1.357-1.048 3.214-2.484 2.897-4.681a2.87 2.87 0 0 0-1.518-2.141 2.8 2.8 0 0 0-2.565-.018 3 3 0 0 0-.343.199 3 3 0 0 0-.671-.337c-.835-.297-1.693-.205-2.422.253-.761.479-1.253 1.284-1.352 2.215-.212 2.13 1.531 3.463 2.933 4.535l.002.002c.238.18.468.357.674.526.238.198.541.3.841.3.161 0 .321-.03.47-.09.196-.075.334-.19.438-.277q.257-.21.541-.428M8 18.761a.75.75 0 0 0 .75-.75V18a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.755c0 .414.336.75.75.75m5.009-9.11a1.32 1.32 0 0 1 1.207.005c.393.204.658.582.727 1.03.177 1.23-.854 2.134-2.331 3.275-.202.156-.398.308-.611.487a31 31 0 0 0-.6-.466c-1.22-.932-2.483-1.897-2.354-3.191.049-.46.296-.87.66-1.1.155-.098.378-.192.656-.192a1.48 1.48 0 0 1 1.079.494.751.751 0 0 0 1.12-.001 1.5 1.5 0 0 1 .447-.341"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartPokerCardBulk;
