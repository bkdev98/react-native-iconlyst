import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudyTwoTone = ({
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
      d="M12.055 5.766c-3.538 0-4.79 3.193-4.79 4.79-2.22.02-4.013 1.51-4.013 4.05 0 1.047.398 2.002 1.05 2.72"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.666 21a2.896 2.896 0 1 0-2.779-3.715A1.925 1.925 0 1 0 5.177 21zM14.95 8.792a2.896 2.896 0 1 1 2.78-3.715 1.925 1.925 0 1 1 .71 3.715z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.584 18.63h5.257c.447 0 1.038-.088 1.637-.328a4.05 4.05 0 0 0 2.379-3.696c0-2.54-1.793-4.03-4.012-4.05 0-.471-.11-1.082-.354-1.708"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudyTwoTone;
