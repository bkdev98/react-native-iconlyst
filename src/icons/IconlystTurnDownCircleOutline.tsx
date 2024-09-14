import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownCircleOutline = ({
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
      d="M2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.975 12.896a.75.75 0 0 1 1.06 0c.71.708 1.175 1.173 1.779 1.778l.307-.308 1.472-1.47a.75.75 0 1 1 1.06 1.06l-1.47 1.47-.839.839a.75.75 0 0 1-1.06 0l-2.308-2.309a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.154 9.016a2.59 2.59 0 0 0-2.59 2.59v4.131a.75.75 0 0 1-1.5 0v-4.131a4.09 4.09 0 1 1 8.18 0v1.587a.75.75 0 0 1-1.5 0v-1.587a2.59 2.59 0 0 0-2.59-2.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownCircleOutline;
