import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlayingBroken = ({
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
      d="M7.79 7.35c-.592 3.177-2.119 2.722-2.6 5.31-.268 2.633 1.845 3.695 6.672 4.593 4.826.898 7.177.678 7.878-1.884.483-2.59-1.105-2.713-.514-5.891.462-2.483-1.268-5.727-4.73-6.372-2.074-.386-3.904.322-5.137 1.485M10.72 19.965A2.71 2.71 0 0 0 12.837 21c.854 0 1.617-.4 2.125-1.035"
    />
  </Svg>
);
export default IconlystRingtonePlayingBroken;
