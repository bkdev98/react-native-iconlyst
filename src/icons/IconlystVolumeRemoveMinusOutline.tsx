import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeRemoveMinusOutline = ({
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
      d="M11.888 19.677a3.17 3.17 0 0 1-1.68-.487L7.43 17.453a1.5 1.5 0 0 0-.745-.2c-.372-.025-.637-.035-.87-.044a3.18 3.18 0 0 1-2.272-.713c-1.053-.88-1.047-2.74-1.043-4.235v-.532c0-1.491-.01-3.349 1.04-4.224a3.16 3.16 0 0 1 2.278-.718c.23-.008.5-.017.806-.04a1.8 1.8 0 0 0 .806-.2l2.778-1.737a3.13 3.13 0 0 1 3.117-.136 3.47 3.47 0 0 1 1.846 2.877 61 61 0 0 1 0 8.9 3.44 3.44 0 0 1-1.825 2.86c-.45.238-.95.364-1.46.366M6.75 15.76c.52.008 1.03.154 1.476.423l2.774 1.735a1.64 1.64 0 0 0 1.652.069 1.94 1.94 0 0 0 1.021-1.623 60 60 0 0 0 0-8.7A1.97 1.97 0 0 0 12.64 6.02a1.61 1.61 0 0 0-1.637.074L8.224 7.831a3 3 0 0 1-1.516.423c-.322.024-.6.034-.837.042-.763.027-.968.035-1.372.372-.507.422-.5 2.078-.5 3.067v.54c0 .991-.007 2.651.5 3.077.4.333.607.341 1.369.368.248.01.533.02.87.045zM21.25 12.754h-3.7a.75.75 0 1 1 0-1.5h3.7a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystVolumeRemoveMinusOutline;
