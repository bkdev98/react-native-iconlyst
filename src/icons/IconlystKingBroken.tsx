import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingBroken = ({
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
      d="M11.56 15.7h5.637c1.34 0 2.476-.98 2.668-2.306.348-2.406.879-6.018 1.126-7.424a.59.59 0 0 0-.952-.56l-3.904 3.164c-.186-.207-2.668-2.999-3.695-4.154a.59.59 0 0 0-.88 0L7.866 8.574 3.96 5.41a.59.59 0 0 0-.951.56c.247 1.405.777 5.017 1.125 7.423A2.69 2.69 0 0 0 6.803 15.7h1.063M5.334 19.781h6.665M15.332 19.781h3.333"
    />
  </Svg>
);
export default IconlystKingBroken;
