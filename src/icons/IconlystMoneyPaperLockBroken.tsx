import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperLockBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.163 19.112h2.564c.703 0 1.272-.569 1.272-1.272V16.4c0-.702-.57-1.271-1.272-1.271h-2.564c-.702 0-1.272.57-1.272 1.272v1.439c0 .703.57 1.272 1.272 1.272"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.914 15.153v-.947a1.53 1.53 0 0 1 3.06-.006v.953M6.213 8.514h1.403M12.412 19.112H6.189C4.223 19.112 3 17.725 3 15.762v-7.4c0-1.963 1.223-3.35 3.188-3.35h1.298M21 10.361V8.363c0-1.964-1.23-3.351-3.189-3.351H10.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.777a2.287 2.287 0 1 0 2.289 2.288"
    />
  </Svg>
);
export default IconlystMoneyPaperLockBroken;
