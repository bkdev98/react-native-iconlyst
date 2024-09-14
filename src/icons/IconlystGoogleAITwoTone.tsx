import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAITwoTone = ({
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
      d="M9.675 17.934h5.65M10.523 9.164h3.957M14.725 6.365h1.112c.159 0 .306.083.388.219l.578.955c.082.135.23.218.388.218h2.288M10.276 6.365H9.164a.45.45 0 0 0-.388.219l-.578.955a.45.45 0 0 1-.388.218H5.52M7.112 11.016h1.926c.168 0 .323.093.401.241l.78 1.477a.45.45 0 0 0 .401.242h3.76a.45.45 0 0 0 .402-.242l.78-1.477a.45.45 0 0 1 .401-.241h1.926"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.865 13.418a2.94 2.94 0 0 1 0-2.835l3.139-5.665C7.49 4.04 8.388 3.5 9.361 3.5h6.278c.973 0 1.87.54 2.357 1.418l3.14 5.664a2.94 2.94 0 0 1 0 2.835l-3.14 5.666c-.486.877-1.384 1.417-2.357 1.417H9.361c-.973 0-1.87-.54-2.357-1.418zM12.501 3.54v16.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.484 15.722h1.113a.45.45 0 0 0 .388-.219l.578-.954a.45.45 0 0 1 .388-.219h2.607M9.516 15.722H8.403a.45.45 0 0 1-.388-.219l-.578-.954a.45.45 0 0 0-.388-.219H4.442"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleAITwoTone;
