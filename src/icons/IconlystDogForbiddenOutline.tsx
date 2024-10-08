import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogForbiddenOutline = ({
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
      d="M12.057 22.3c-5.51 0-10-4.49-10-10s4.49-10 10-10 10 4.49 10 10-4.49 10-10 10m0-18.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5"
    />
    <Path
      fill={props.color}
      d="M5.887 19.771a.7.7 0 0 1-.44-.15c-.33-.26-.41-.69-.16-1.02 1.17-1.5 2.33-2.97 2.87-4.32a.75.75 0 1 1 1.39.57c-.62 1.54-1.84 3.1-3.02 4.61-.16.2-.4.31-.64.31M16.437 14.58c-.16 0-.32-.01-.48-.04-.33-.06-3.19-.56-3.58-.89a.75.75 0 0 1-.09-1.06c.23-.27.6-.34.9-.19.25.08 1.44.39 3.02.66.32.06.58 0 .8-.17.39-.3.66-.93.78-1.52l-2.37-1.18a.77.77 0 0 1-.42-.67c0-.28-.11-1.28-1.49-1.45l-1.01-.14c-1.07-.16-1.92.14-2.52.89l-.48.66a.751.751 0 1 1-1.22-.88l.5-.69c.96-1.21 2.31-1.7 3.92-1.47l1 .14c1.87.24 2.57 1.49 2.75 2.45l2.48 1.23c.28.14.44.43.41.73-.03.35-.24 2.15-1.44 3.08-.43.33-.94.51-1.49.51z"
    />
    <Path
      fill={props.color}
      d="M9.107 15.061c-1.06 0-1.97-.4-2.02-.43a.75.75 0 0 1-.41-.9l.75-2.51c.12-.4.53-.63.93-.5.4.12.62.54.5.93l-.54 1.81c.53.12 1.23.18 1.73-.14.35-.23.81-.13 1.04.22s.13.81-.22 1.04c-.56.36-1.18.48-1.76.48M13.397 21.99c-.39 0-.71-.3-.75-.69-.04-.54-.1-1.05-.15-1.54-.12-1.19-.24-2.3-.19-3.51.02-.41.4-.73.78-.71.41.02.73.37.71.78-.05 1.09.06 2.16.18 3.28.05.51.11 1.03.15 1.58.03.41-.28.77-.69.81h-.06z"
    />
    <Path
      fill={props.color}
      d="M11.627 18.921c-2.04 0-3.99-.94-5.03-1.68a.753.753 0 1 1 .87-1.23c.88.63 3.66 2.04 5.88 1.06.38-.17.82 0 .99.38s0 .82-.38.99c-.76.34-1.55.48-2.33.48M13.277 10.661c-.41 0-.75-.34-.75-.75s.34-.76.75-.76.75.33.75.74c0 .42-.34.76-.75.76zM18.577 19.57c-.19 0-.38-.07-.53-.22L5.017 6.32a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l13.03 13.03c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystDogForbiddenOutline;
