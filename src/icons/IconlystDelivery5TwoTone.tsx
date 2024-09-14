import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery5TwoTone = ({
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
      d="m4.66 4.767-.846 2.116a6.3 6.3 0 0 0-.452 2.334l-.012 7.696c-.006 2.373 1.07 4.051 3.446 4.057l11.108.015c2.374.006 3.426-1.665 3.432-4.037l.014-7.71a6.3 6.3 0 0 0-.459-2.371l-.848-2.107a2.79 2.79 0 0 0-2.585-1.745H7.248c-1.14 0-2.166.693-2.588 1.752M7.453 16.478h2.996M7.453 13.64H8.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.161 14.97h2.062c.44 0 .799-.357.799-.799V12.11a.8.8 0 0 0-.8-.797h-2.06a.8.8 0 0 0-.799.797v2.062c0 .442.357.799.798.799"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.35 8.007V3.015"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.486 8.007h17.726"
    />
  </Svg>
);
export default IconlystDelivery5TwoTone;
