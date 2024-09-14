import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCloseRemoveBold = ({
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
      d="M11 20.882a1 1 0 0 0 2 0V3.118a1 1 0 0 0-2 0zM2.033 14.248a1 1 0 0 0 2 0v-4.212a1 1 0 0 0-2 0zM7.516 18.695a1 1 0 0 1-1-1V6.443a1 1 0 0 1 2 0v11.252a1 1 0 0 1-1 1M15.482 12a1 1 0 0 0 2 0V6.304a1 1 0 1 0-2 0zM20.967 12.66a1 1 0 0 1-1-1V9.751a1 1 0 0 1 2 0v1.907a1 1 0 0 1-1 1M20.225 21.316a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.395-1.396 1.396-1.397a1 1 0 1 0-1.416-1.413l-1.394 1.396-1.396-1.396a.999.999 0 1 0-1.414 1.414l1.396 1.396-1.396 1.396a.999.999 0 1 0 1.414 1.414l1.396-1.395z"
    />
  </Svg>
);
export default IconlystSongsWaveCloseRemoveBold;
