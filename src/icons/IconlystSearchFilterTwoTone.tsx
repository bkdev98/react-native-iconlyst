import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFilterTwoTone = ({
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
      d="M19.97 12.568A8.271 8.271 0 0 1 3.5 11.489c0-4.219 3.16-7.7 7.24-8.206"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.4 17.547 3.366 3.357"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.69 3.096c-.578 0-1.047.47-1.047 1.048v.801c0 .39.155.765.43 1.04l1.706 1.519a.6.6 0 0 1 .176.424v1.26a.6.6 0 0 0 .823.558l.735-.293a.6.6 0 0 0 .378-.558v-.776c0-.17.073-.333.199-.447l1.923-1.902c.31-.279.486-.676.486-1.093v-.533c0-.578-.468-1.048-1.048-1.048z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchFilterTwoTone;
