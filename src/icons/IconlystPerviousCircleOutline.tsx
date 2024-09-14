import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousCircleOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.695 8.26a.75.75 0 0 1 .75.75v5.98a.75.75 0 0 1-1.5 0V9.01a.75.75 0 0 1 .75-.75M14.254 9.885a8.6 8.6 0 0 0-2.506 1.589c-.217.202-.276.392-.275.53 0 .14.063.326.272.518l.004.003a8.4 8.4 0 0 0 2.512 1.59l.006.003c.22.093.384.065.477.016.082-.043.186-.142.218-.378a16.7 16.7 0 0 0 0-3.516c-.032-.238-.132-.337-.202-.377-.073-.04-.233-.085-.506.022m1.247-1.326c.548.311.87.87.95 1.503l.001.017a18 18 0 0 1 0 3.851l-.002.014c-.088.673-.45 1.222-1.004 1.516-.543.287-1.184.284-1.761.04a9.9 9.9 0 0 1-2.953-1.873c-.47-.43-.756-.997-.76-1.615-.002-.62.279-1.195.757-1.64l.004-.003a10.1 10.1 0 0 1 2.958-1.874l.006-.002c.61-.242 1.26-.243 1.804.066"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPerviousCircleOutline;
