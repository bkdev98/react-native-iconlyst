import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperLockTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.912 19.112H6.689c-1.966 0-3.189-1.387-3.189-3.35v-7.4c0-1.963 1.223-3.35 3.188-3.35h11.624c1.96 0 3.188 1.387 3.188 3.35v2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.663 19.112h2.564c.703 0 1.272-.569 1.272-1.272V16.4c0-.702-.57-1.271-1.272-1.271h-2.564c-.702 0-1.272.57-1.272 1.272v1.439c0 .703.57 1.272 1.272 1.272"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.414 15.153v-.947a1.53 1.53 0 0 1 3.06-.006v.953M6.713 8.512h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.213 12.063a2.287 2.287 0 1 1 4.575 0 2.287 2.287 0 0 1-4.575 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperLockTwoTone;
