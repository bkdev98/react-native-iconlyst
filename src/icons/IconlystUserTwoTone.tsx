import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserTwoTone = ({
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
      d="M16.886 8.09a4.246 4.246 0 1 1-8.492 0 4.246 4.246 0 0 1 8.492 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.142 19.195c.096.359-.075.728-.39.923a11.54 11.54 0 0 1-6.077 1.725c-2.252 0-4.359-.646-6.13-1.76-.313-.196-.48-.566-.382-.924.517-1.866 2.394-3.721 6.475-3.721 4.13 0 6 1.869 6.504 3.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserTwoTone;
