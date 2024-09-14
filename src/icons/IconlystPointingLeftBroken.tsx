import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingLeftBroken = ({
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
      d="M19.351 17.477c-1.68 1.677-5.09 2.619-7.68 1.662-2.56-.951-2.44-4.357-2.67-6.708l-4.35-.067a1.681 1.681 0 0 1 .03-3.361h9.64l-1.74-1.202a1.84 1.84 0 0 1-.68-2.171c.35-.894 1.32-1.373 2.22-1.047 1.68.609 3.55 1.574 5.1 2.817 1.57 1.267 2.06 4.22 1.63 6.726"
    />
  </Svg>
);
export default IconlystPointingLeftBroken;
