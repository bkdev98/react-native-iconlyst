import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMugBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.704 6.677c-3.65 0-5.67-.76-6.06-1.16.39-.39 2.4-1.15 6.06-1.15 3.65 0 5.67.76 6.06 1.15-.39.4-2.41 1.16-6.06 1.16m2.66 7.98a.751.751 0 0 1-.75 1.3l-1.16-.67v1.34a.75.75 0 0 1-1.5 0v-1.34l-1.162.67a.75.75 0 0 1-.75-1.299l1.162-.67-1.162-.67a.751.751 0 0 1 .75-1.3l1.161.67v-1.34a.75.75 0 0 1 1.5 0v1.341l1.161-.67a.75.75 0 1 1 .75 1.3l-1.16.668zm-10.263.925c-.668-.007-1.079-.035-1.3-.164a1.2 1.2 0 0 1-.438-.439c-.167-.285-.167-.873-.167-1.94v-1.486c0-1.066 0-1.653.168-1.94.105-.18.257-.333.438-.439.221-.129.632-.157 1.3-.164zm7.603-12.715c-2.83 0-7.6.56-7.6 2.65l.001.004h-.004v1.991c-.928.01-1.534.063-2.056.367a2.7 2.7 0 0 0-.977.98c-.372.634-.372 1.366-.372 2.694v1.486c0 1.33 0 2.061.372 2.697.236.405.575.744.98.98.52.302 1.126.354 2.053.364v.652c0 2.943 2.771 4.631 7.601 4.631 4.688 0 7.6-1.774 7.6-4.63V5.53l.002-.013c0-2.09-4.78-2.65-7.6-2.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasMugBold;
