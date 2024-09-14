import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage4Light = ({
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
      d="M8.601 3h8.434c2.948 0 4.782 2.082 4.782 5.027v7.946c0 2.946-1.834 5.027-4.782 5.027H8.6c-2.948 0-4.783-2.081-4.783-5.027V8.027C3.818 5.082 5.662 3 8.601 3M14.512 13.189h3.53m-3.53 3.306h3.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.237 16.738h-1.49a1.15 1.15 0 0 1-1.151-1.151v-1.49a1.15 1.15 0 0 1 1.15-1.15h1.491a1.15 1.15 0 0 1 1.151 1.15v1.49a1.15 1.15 0 0 1-1.15 1.15"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.163 6.55h-.056m2.541 0h-.055m2.54 0h-.055M21.817 9.492H3.818"
    />
  </Svg>
);
export default IconlystWebPage4Light;
