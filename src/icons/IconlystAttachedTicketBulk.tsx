import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachedTicketBulk = ({
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
      d="m5.394 18.952 7.467 2.32c1.51.41 2.44.66 3.23.66.22 0 .43-.02.64-.06.92-.18 1.77-.67 2.39-1.37.368-.419.627-.937.895-1.768-.066.038-.127.084-.196.118-.483.241-1.675.372-1.63.37-.06.11-.13.21-.2.29-.4.45-.95.77-1.54.89-.61.12-1.43-.1-3-.52l-.18-.05-1.865-.57H8.97a21 21 0 0 1-3.576-.31M7.98 4.4l1.51-.01h-.02l-1.51.01M17.67 14.665h-5.5c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h5.5a.749.749 0 1 1 0 1.5m0-3.63H15c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h2.67a.749.749 0 1 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.06 6.93v.81a2.055 2.055 0 0 1-4.11 0V4.55c0-.05 0-.09.01-.14V4.4c.08-1.3 1.16-2.33 2.48-2.33 1.31 0 2.38 1.02 2.47 2.32H11.4a.97.97 0 0 0-.96-.82c-.5 0-.89.35-.97.82v.01c-.02.05-.02.09-.02.15v3.19c0 .31.25.55.56.55.3 0 .55-.24.55-.55v-.81a.749.749 0 1 1 1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.65 6.63a4.05 4.05 0 0 0-1.83-1.83c-.83-.41-1.82-.41-3.79-.41H9.49l-1.51.01c-1.34 0-2.12.06-2.8.4-.79.39-1.44 1.04-1.83 1.84-.41.83-.41 1.82-.41 3.79v2.792c0 1.97 0 2.96.41 3.8.39.79 1.04 1.44 1.83 1.83.83.41 1.82.41 3.79.41h6.54l1.51-.01c1.34 0 2.12-.06 2.8-.4.79-.39 1.44-1.04 1.83-1.84.41-.83.41-1.82.41-3.79V10.43c0-1.97 0-2.96-.41-3.8"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAttachedTicketBulk;
