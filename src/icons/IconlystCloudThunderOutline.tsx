import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudThunderOutline = ({
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
      d="M15.36 4.535a5.444 5.444 0 0 1 3.739 9.402.75.75 0 1 0 1.03 1.09A6.944 6.944 0 1 0 8.951 7.302a4.868 4.868 0 0 0-5.92 4.754.75.75 0 0 0 1.5 0 3.368 3.368 0 0 1 4.61-3.132.75.75 0 0 0 .996-.485 5.45 5.45 0 0 1 5.224-3.904"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.55 12.547c-1.052 0-1.99.573-2.53 1.465a.75.75 0 0 1-1.283-.776c.788-1.304 2.194-2.19 3.813-2.19 1.806 0 3.342 1.099 4.06 2.658q.223-.033.454-.033c1.82 0 3.241 1.532 3.241 3.352s-1.42 3.352-3.241 3.352h-3.569a.75.75 0 0 1 0-1.5h3.569c.931 0 1.741-.799 1.741-1.852 0-1.054-.81-1.852-1.741-1.852q-.337.002-.631.125a.75.75 0 0 1-1.01-.489c-.373-1.327-1.535-2.26-2.873-2.26M7.288 12.856a.75.75 0 0 1 .396.984l-.442 1.036h.818a.952.952 0 0 1 .716 1.58l-.564-.494.564.494-3.128 3.57c-.663.758-1.895.1-1.636-.872l.413-1.548h-.668a.952.952 0 0 1-.884-1.306l.65-1.588a.75.75 0 0 1 1.389.57l-.338.824h.564a.952.952 0 0 1 .927 1.168l.787-.898h-.44a.952.952 0 0 1-.88-1.313l.772-1.81a.75.75 0 0 1 .984-.397"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.196 15.888a.75.75 0 0 1 .075 1.058l-.556.64h.633a.75.75 0 0 1 .568 1.24l-1.659 1.926a.75.75 0 0 1-1.136-.98l.59-.685h-.639a.75.75 0 0 1-.566-1.241l1.631-1.883a.75.75 0 0 1 1.058-.075"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudThunderOutline;
