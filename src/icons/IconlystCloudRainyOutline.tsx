import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainyOutline = ({
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
      d="M15.36 4.83a5.444 5.444 0 0 1 3.739 9.402.75.75 0 1 0 1.03 1.09A6.944 6.944 0 1 0 8.951 7.597a4.868 4.868 0 0 0-5.92 4.754.75.75 0 0 0 1.5 0 3.368 3.368 0 0 1 4.61-3.132.75.75 0 0 0 .996-.485 5.45 5.45 0 0 1 5.224-3.904"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.55 12.842c-1.052 0-1.99.573-2.53 1.465a.75.75 0 0 1-1.283-.776c.788-1.304 2.194-2.19 3.813-2.19 1.806 0 3.342 1.099 4.06 2.658q.223-.033.454-.033c1.82 0 3.241 1.532 3.241 3.352s-1.42 3.351-3.241 3.351h-3.569a.75.75 0 0 1 0-1.5h3.569c.931 0 1.741-.798 1.741-1.851 0-1.054-.81-1.852-1.741-1.852q-.337.002-.631.125a.75.75 0 0 1-1.01-.49c-.373-1.326-1.535-2.26-2.873-2.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.399 20.616a.75.75 0 0 1-.505-.933l.478-1.602a.75.75 0 1 1 1.437.429l-.477 1.601a.75.75 0 0 1-.933.505m4.282 0a.75.75 0 0 1-.507-.93l.384-1.306H7.58a.75.75 0 0 1-.716-.973l.673-2.165a.75.75 0 0 1 1.433.445L8.6 16.88h.96a.75.75 0 0 1 .72.962l-.667 2.267a.75.75 0 0 1-.932.507m3.855-1.593a.75.75 0 0 1-.544-.91l.402-1.599a.75.75 0 0 1 1.454.366l-.401 1.598a.75.75 0 0 1-.91.545m-9.171-2.114a.75.75 0 0 1-.536-.915l.313-1.2a.75.75 0 1 1 1.451.379l-.313 1.2a.75.75 0 0 1-.915.536"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRainyOutline;
