import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePremiereCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.424 15.672a.75.75 0 0 0 .75-.75v-2.137a.685.685 0 0 1 1.369 0v2.137a.75.75 0 0 0 1.5 0v-2.137a2.185 2.185 0 1 0-4.37 0v2.137c0 .414.337.75.75.75M7.872 9.695l.112-.018c.408-.063.925-.1 1.422-.028s.915.247 1.21.557c.285.299.54.815.54 1.752 0 .936-.255 1.465-.546 1.778-.301.324-.726.51-1.223.596a4.9 4.9 0 0 1-1.515-.004zm-.75 5.249-.201.722a.75.75 0 0 1-.549-.722V9.096a.75.75 0 0 1 .531-.717l.22.717-.219-.717.003-.001.005-.002.015-.004a4 4 0 0 1 .225-.06c.148-.035.355-.08.603-.117.49-.076 1.17-.133 1.868-.03.7.103 1.477.374 2.08 1.006.611.643.954 1.564.954 2.787 0 1.224-.343 2.148-.948 2.8-.597.64-1.368.931-2.067 1.052a6.4 6.4 0 0 1-1.868.019 7 7 0 0 1-.83-.157l-.015-.004-.005-.001h-.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePremiereCircleOutline;
