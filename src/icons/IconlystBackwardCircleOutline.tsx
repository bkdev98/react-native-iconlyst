import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardCircleOutline = ({
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
      d="M14.969 9.885a8.6 8.6 0 0 0-2.506 1.589c-.217.202-.276.392-.275.53 0 .14.062.326.272.518l.004.003a8.4 8.4 0 0 0 2.512 1.59l.006.003c.22.093.384.065.477.016.082-.043.186-.142.218-.378a16.7 16.7 0 0 0-.001-3.516c-.031-.238-.131-.337-.2-.377-.074-.04-.234-.085-.507.022m1.247-1.326c.547.311.87.87.95 1.503l.001.017a18 18 0 0 1 0 3.851l-.002.014c-.088.673-.45 1.222-1.004 1.516-.543.287-1.184.284-1.761.04a9.9 9.9 0 0 1-2.954-1.873c-.47-.43-.755-.997-.758-1.615-.004-.62.278-1.195.756-1.64l.004-.003a10.1 10.1 0 0 1 2.958-1.874l.006-.002c.61-.242 1.26-.243 1.804.066"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.318 9.4-.004.002-.013.01-.055.036-.204.142c-.172.121-.409.29-.665.483-.53.4-1.08.85-1.36 1.176-.386.46-.373 1.063-.002 1.497l.003.003c.297.35.848.803 1.371 1.194a22 22 0 0 0 .852.604l.053.035.013.009.003.002a.75.75 0 0 1-.822 1.254l.411-.627-.411.627-.007-.004-.016-.01-.06-.04-.215-.147a24 24 0 0 1-.698-.501c-.524-.391-1.2-.931-1.618-1.426a2.63 2.63 0 0 1-.002-3.438l.004-.005c.398-.465 1.074-1.006 1.6-1.401a27 27 0 0 1 .921-.663l.06-.042.017-.01.006-.005.42.622-.42-.622a.75.75 0 0 1 .838 1.244"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackwardCircleOutline;
