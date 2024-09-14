import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFruitsTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M8.442 6.486c-.064-1.416.73-2.725.73-2.725M11.555 11.076c-.347-.503-.61-1.09-.61-1.794-.086-1.726-.878-2.796-2.507-2.796-1.628 0-2.42 1.07-2.505 2.796 0 1.678-1.493 2.685-2.056 3.487-2.402 3.429.462 7.585 4.561 7.467a5.55 5.55 0 0 0 3.117-.828" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 14.305c-.247-3.991-3.183-3.644-3.96-3.434a6 6 0 0 1-3.164 0c-.778-.21-3.714-.557-3.96 3.434-.03 3.788 2.409 5.674 3.006 5.74 1.076.263 2.01-.348 2.536-.348.525 0 1.447.57 2.535.348.604-.074 3.037-1.952 3.007-5.74"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.458 11.069c0-1.225.52-2.454 2.076-2.756"
    />
  </Svg>
);
export default IconlystFruitsTwoTone;
