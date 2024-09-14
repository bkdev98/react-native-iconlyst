import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlideProgressTwoTone = ({
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
      d="M7.362 3.895h9.943a4.03 4.03 0 0 1 4.029 4.029v8.156a4.03 4.03 0 0 1-4.03 4.03H7.363a4.03 4.03 0 0 1-4.028-4.03V7.924a4.03 4.03 0 0 1 4.028-4.03"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.565 16.48h7.018m-7.018-.94v1.65M7.086 16.48h1.181"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.115 10.663a7.3 7.3 0 0 1-2.128 1.336c-.687.27-1.262-.068-1.346-.745-.103-.998-.1-1.953 0-2.845.092-.704.726-1.003 1.346-.741a7.1 7.1 0 0 1 2.128 1.335c.53.48.542 1.162 0 1.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlideProgressTwoTone;
