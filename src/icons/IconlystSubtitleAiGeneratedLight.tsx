import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleAiGeneratedLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.136 11.415V8.586c.009-2.874-1.728-4.437-4.531-4.437H7.548c-2.795 0-4.54 1.563-4.54 4.437v6.747c0 2.918 1.745 4.518 4.54 4.518h6.914M20.145 8.737H3M11.29 15.65h-.51m-4.208-3.293h2.105m-.474 3.293H6.628"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.528 14.003.096.26a3.58 3.58 0 0 0 2.116 2.12l.26.097-.26.096a3.59 3.59 0 0 0-2.116 2.12l-.096.26-.097-.26a3.59 3.59 0 0 0-2.116-2.12l-.26-.096.26-.097a3.58 3.58 0 0 0 2.116-2.12zM14.233 11.758c.163.538.583.96 1.12 1.123a1.69 1.69 0 0 0-1.12 1.122 1.69 1.69 0 0 0-1.121-1.122 1.69 1.69 0 0 0 1.12-1.123"
    />
  </Svg>
);
export default IconlystSubtitleAiGeneratedLight;
