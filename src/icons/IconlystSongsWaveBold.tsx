import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveBold = ({
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
      d="M12 21.882a1 1 0 0 1-1-1V3.118a1 1 0 0 1 2 0v17.764a1 1 0 0 1-1 1M7.516 18.695a1 1 0 0 1-1-1V6.443a1 1 0 0 1 2 0v11.252a1 1 0 0 1-1 1M15.482 17.556a1 1 0 0 0 2 0V6.304a1 1 0 1 0-2 0zM20.967 14.963a1 1 0 0 1-1-1v-4.21a1 1 0 0 1 2 0v4.21a1 1 0 0 1-1 1M2.033 14.248a1 1 0 0 0 2 0v-4.212a1 1 0 0 0-2 0z"
    />
  </Svg>
);
export default IconlystSongsWaveBold;
