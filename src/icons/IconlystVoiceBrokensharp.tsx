import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.53 21.854h5.44M12.25 21.854v-4.39M20.755 12.354v-4.39M3.745 12.354v-4.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.536 13.16c0 2.377-1.918 4.304-4.286 4.304-2.366 0-4.285-1.927-4.285-4.304v-6c0-2.378 1.919-4.306 4.285-4.306 2.368 0 4.286 1.928 4.286 4.306v2.191"
    />
  </Svg>
);
export default IconlystVoiceBrokensharp;
