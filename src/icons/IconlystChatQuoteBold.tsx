import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatQuoteBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.228 9.146q-.141 0-.277.037c-.37.102-.647.382-.761.767a1.21 1.21 0 0 0 .242 1.153c.214.242.533.395.857.41a.75.75 0 0 1 .707.641q.204-.398.322-.827c.187-.69.137-1.31-.14-1.703a1.19 1.19 0 0 0-.95-.478M9.265 9.146q-.142 0-.277.037c-.37.102-.647.382-.761.767-.122.413-.031.843.242 1.153.214.242.533.395.857.41a.75.75 0 0 1 .707.642q.206-.4.323-.829c.186-.69.136-1.31-.14-1.702a1.19 1.19 0 0 0-.951-.478"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.765 11.72a5.82 5.82 0 0 1-2.212 3.195.75.75 0 1 1-.875-1.218c.28-.202.537-.441.763-.708a.8.8 0 0 1-.223.022 2.7 2.7 0 0 1-2.467-3.486 2.6 2.6 0 0 1 1.798-1.787 2.665 2.665 0 0 1 2.858 1.024c.54.77.668 1.82.358 2.958m-5.962-.001a5.84 5.84 0 0 1-2.212 3.196.75.75 0 0 1-.877-1.218c.28-.202.537-.441.763-.708a.8.8 0 0 1-.222.022 2.7 2.7 0 0 1-2.467-3.486 2.6 2.6 0 0 1 1.798-1.787 2.66 2.66 0 0 1 2.858 1.024c.54.768.668 1.818.359 2.957m5.56-8.38H7.24a4.2 4.2 0 0 0-4.19 4.203v6.939c0 2.317 1.879 4.203 4.19 4.203h1.068c.51 0 .988.199 1.349.56l1.42 1.426c.328.328.762.509 1.223.509s.896-.181 1.222-.51l1.422-1.425c.36-.361.84-.56 1.349-.56h1.069c2.309 0 4.188-1.886 4.188-4.203V7.54c0-2.316-1.88-4.201-4.188-4.201"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatQuoteBold;
