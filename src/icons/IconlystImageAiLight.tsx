import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageAiLight = ({
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
      d="M10.842 9.778a1.697 1.697 0 1 1-3.394 0 1.697 1.697 0 0 1 3.394 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.859 14.194V8.058c0-2.921-1.829-4.982-4.75-4.982H7.74C4.82 3.076 3 5.136 3 8.058v7.886c0 2.922 1.828 4.981 4.74 4.981h5.467"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.702 20.923c-.647-5.297 6.732-7.935 12.151-8.263M17.354 15.724l.1.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.221 2.225l-.101.274-.101-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225z"
    />
  </Svg>
);
export default IconlystImageAiLight;
