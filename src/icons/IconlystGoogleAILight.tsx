import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAILight = ({
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
      d="M9.175 17.934h5.65M10.023 9.164h3.957M14.225 6.365h1.112c.159 0 .306.083.388.219l.578.955c.082.135.23.218.388.218h2.288M9.776 6.365H8.664a.45.45 0 0 0-.388.219l-.578.955a.45.45 0 0 1-.388.218H5.02M6.612 11.016h1.926c.168 0 .323.093.401.241l.78 1.477a.45.45 0 0 0 .401.242h3.76a.45.45 0 0 0 .402-.242l.78-1.477a.45.45 0 0 1 .401-.241h1.926"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.365 13.418a2.94 2.94 0 0 1 0-2.835l3.139-5.665C6.99 4.04 7.888 3.5 8.861 3.5h6.278c.973 0 1.87.54 2.357 1.418l3.14 5.664a2.94 2.94 0 0 1 0 2.835l-3.14 5.666c-.486.877-1.384 1.417-2.357 1.417H8.861c-.973 0-1.87-.54-2.357-1.418zM12.001 3.54v16.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.984 15.722h1.113a.45.45 0 0 0 .388-.219l.578-.954a.45.45 0 0 1 .388-.219h2.607M9.016 15.722H7.903a.45.45 0 0 1-.388-.219l-.578-.954a.45.45 0 0 0-.388-.219H3.942"
    />
  </Svg>
);
export default IconlystGoogleAILight;
