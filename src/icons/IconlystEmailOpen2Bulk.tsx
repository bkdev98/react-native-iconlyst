import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m19.9 7.55-6-4.2c-1.1-.8-2.7-.8-3.8 0l-6 4.2c-1 .7-1.6 1.8-1.6 3v5.7c0 1.5.5 2.7 1.4 3.6s2.2 1.4 3.8 1.4h8.6c1.6 0 2.9-.5 3.8-1.4s1.4-2.1 1.4-3.6v-5.7c0-1.2-.6-2.3-1.6-3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.71 14.85c-.03.02-.07.05-.11.07-.76.63-1.61.91-2.55.92-.01.01-.03.01-.04.01h-.02c-.02 0-.03 0-.04-.01-.94-.01-1.79-.29-2.55-.92-.04-.02-.08-.05-.11-.07l-5.3-4.3c-.11-.68.06-1.18.52-1.5l5.7 4.6c.54.44 1.17.66 1.79.67.62-.01 1.25-.23 1.79-.67l5.7-4.6c.39.37.56.87.52 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpen2Bulk;
