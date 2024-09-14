import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpCircleOutline = ({
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
      d="M14.188 7.516c.199 0 .39.079.53.22l1.572 1.572.736.736a.75.75 0 1 1-1.06 1.06l-.737-.735-1.042-1.042-.215.215-1.563 1.563a.75.75 0 1 1-1.06-1.062l2.308-2.308a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.187 7.516a.75.75 0 0 1 .75.75v4.13a4.09 4.09 0 1 1-8.18 0V10.81a.75.75 0 0 1 1.5 0v1.587a2.59 2.59 0 0 0 5.18 0V8.266a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpCircleOutline;
