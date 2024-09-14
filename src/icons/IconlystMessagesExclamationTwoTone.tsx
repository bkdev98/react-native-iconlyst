import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesExclamationTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.008 20.805a8.985 8.985 0 0 0 10.157-1.81c3.511-3.523 3.518-9.241 0-12.77a8.985 8.985 0 0 0-12.728 0c-2.75 2.759-3.345 6.847-1.803 10.19.198.494.352.892.352 1.278 0 1.078-1.037 2.412-.346 3.105.69.693 2.022-.346 3.089-.352.384 0 .787.16 1.28.359"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.545 15.491v-.073M12.547 12.618V9.805"
    />
  </Svg>
);
export default IconlystMessagesExclamationTwoTone;
