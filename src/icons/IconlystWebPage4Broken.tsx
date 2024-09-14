import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage4Broken = ({
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
      d="M12.818 21h4.217c2.948 0 4.782-2.082 4.782-5.027V8.026C21.817 5.081 19.983 3 17.035 3H8.602C5.662 3 3.818 5.081 3.818 8.026v7.947c0 2.945 1.835 5.026 4.783 5.026h.685M14.512 13.19h3.53m-3.53 3.305h3.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.237 16.737h-1.49a1.15 1.15 0 0 1-1.151-1.151v-1.49a1.15 1.15 0 0 1 1.15-1.15h1.491a1.15 1.15 0 0 1 1.151 1.15v1.49a1.15 1.15 0 0 1-1.15 1.15"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.163 6.55h-.056m2.541 0h-.055m2.54 0h-.055M18.866 9.492H3.818"
    />
  </Svg>
);
export default IconlystWebPage4Broken;
