import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLitecoinBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.495 15.97a.53.53 0 0 0-.38-.18h-6.42l.96-3.61 3.58-.7c.41-.08.67-.47.59-.88a.735.735 0 0 0-.83-.59c-.02-.01-.03 0-.05 0l-2.86.56-.55.1-.54.11-4.54.88-1.1.22-3.12.6-.24.05c-.41.08-.67.47-.59.88.07.36.38.6.73.6.05 0 .1 0 .15-.01l2.62-.51-2.07 7.38c-.04.15-.01.31.08.44.1.12.25.19.4.19h12.96c.24 0 .45-.17.49-.41l.84-4.71a.56.56 0 0 0-.11-.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.905 10.05 4.51-.87.917-.183a.3.3 0 0 0 .23-.217l1.503-5.65c.04-.15.01-.31-.09-.43a.5.5 0 0 0-.4-.2h-5.21c-.23 0-.42.15-.48.37L8.937 9.799a.3.3 0 0 0 .348.375z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLitecoinBulk;
