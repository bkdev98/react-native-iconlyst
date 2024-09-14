import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesLockLight = ({
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
      d="M8.508 21.02a8.985 8.985 0 0 0 10.157-1.81c3.511-3.523 3.518-9.241 0-12.77a8.985 8.985 0 0 0-12.728 0c-2.75 2.759-3.345 6.847-1.803 10.19.198.494.352.892.352 1.278 0 1.077-1.037 2.412-.346 3.105.69.693 2.022-.347 3.089-.352.384 0 .787.16 1.28.359"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.82 16.548h2.963c.812 0 1.47-.661 1.47-1.476v-1.668c0-.815-.658-1.476-1.47-1.476H10.82c-.812 0-1.47.66-1.47 1.476v1.668c0 .815.658 1.476 1.47 1.476"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.07 11.956v-1.098a1.77 1.77 0 0 0-1.79-1.752 1.77 1.77 0 0 0-1.747 1.744v1.106"
    />
  </Svg>
);
export default IconlystMessagesLockLight;
