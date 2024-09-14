import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalSquareBold = ({
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
      d="m16.966 14.454-1.741 1.752a.75.75 0 0 1-1.064 0l-.002-.003-1.739-1.75a.75.75 0 0 1 1.063-1.057l.459.461v-4.97a.75.75 0 0 1 1.5 0v4.973l.461-.464a.749.749 0 1 1 1.063 1.057m-5.387-3.472a.75.75 0 0 1-1.061-.002l-.461-.463v4.974a.75.75 0 0 1-1.5 0v-4.973l-.459.461a.75.75 0 1 1-1.064-1.056L8.777 8.17a.746.746 0 0 1 1.063 0l1.742 1.752a.75.75 0 0 1-.003 1.06m4.395-8.294H8.026C4.721 2.688 2.5 4.81 2.5 7.969v8.433c0 3.162 2.221 5.285 5.526 5.285h7.948c3.305 0 5.526-2.123 5.526-5.283V7.97c0-3.16-2.221-5.282-5.526-5.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalSquareBold;
