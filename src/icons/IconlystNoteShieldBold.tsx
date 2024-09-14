import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteShieldBold = ({
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
      d="M10.31 14.212H7.658a.75.75 0 0 1 0-1.5h2.654a.75.75 0 0 1 0 1.5M7.66 8.273h5.082a.75.75 0 1 1 0 1.5H7.659a.75.75 0 0 1 0-1.5m4.81 9.762c0-.693-.01-1.166-.016-1.494-.018-.904-.032-1.618.726-2.372.702-.732 3.38-1.523 4.045-1.523.314 0 1.078.18 1.874.448a.307.307 0 0 0 .407-.287v-5.49a4.626 4.626 0 0 0-4.62-4.622H7.788a4.625 4.625 0 0 0-4.619 4.621v9.76a4.624 4.624 0 0 0 4.619 4.62h5.608c.277 0 .416-.354.236-.563-.677-.789-1.163-1.813-1.163-3.098"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.326 16.524c-.006.34-.016.828-.016 1.546 0 1.383-1.445 2.104-2.006 2.332-.561-.228-2.005-.95-2.005-2.332 0-.72-.01-1.208-.016-1.548l-.01-.393c.469-.221 1.75-.666 1.999-.7.312.034 1.646.496 2.062.693 0 .095-.005.224-.008.402M20.48 15.1c-.427-.444-2.71-1.171-3.176-1.171s-2.748.727-3.164 1.159c-.38.377-.374.65-.357 1.462.006.333.016.814.016 1.519 0 2.825 3.154 3.809 3.289 3.849a.75.75 0 0 0 .432 0c.135-.04 3.29-1.024 3.29-3.85 0-.703.009-1.183.016-1.516.016-.812.02-1.086-.346-1.452"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteShieldBold;
