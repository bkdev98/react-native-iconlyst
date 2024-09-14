import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH1Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.728 9.276a.75.75 0 0 1 .463.693v8.47a.75.75 0 0 1-1.5 0v-6.66l-.837.838a.75.75 0 0 1-1.061-1.06l2.118-2.119a.75.75 0 0 1 .817-.162M4.559 4.984a.75.75 0 0 1 .75.75v5.603h6.97V5.734a.75.75 0 1 1 1.5 0V18.44a.75.75 0 0 1-1.5 0v-5.603H5.31v5.603a.75.75 0 0 1-1.5 0V5.734a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH1Outline;
