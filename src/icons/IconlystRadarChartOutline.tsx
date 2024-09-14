import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadarChartOutline = ({
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
      d="M10.849 3.245a2.81 2.81 0 0 1 3.302 0l6.941 5.043a2.81 2.81 0 0 1 1.02 3.14l-2.65 8.16a2.81 2.81 0 0 1-2.672 1.94H8.21a2.81 2.81 0 0 1-2.671-1.94l-2.651-8.16a2.81 2.81 0 0 1 1.02-3.14zm2.42 1.213a1.31 1.31 0 0 0-1.538 0L4.79 9.501c-.459.334-.651.925-.476 1.464l2.651 8.16c.176.539.678.904 1.245.904h8.58a1.31 1.31 0 0 0 1.245-.905l2.65-8.16a1.31 1.31 0 0 0-.475-1.463z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.924 7.67a1.75 1.75 0 0 1 2.375-.306l3.177 2.292a1.75 1.75 0 0 1 .703 1.704l-.777 4.72a1.75 1.75 0 0 1-1.763 1.466l-5.107-.105a1.75 1.75 0 0 1-1.704-1.933l.437-4.151a1.75 1.75 0 0 1 .39-.93zl.578.477zm1.498.91a.25.25 0 0 0-.34.044l-2.27 2.757a.25.25 0 0 0-.055.133l-.437 4.15a.25.25 0 0 0 .243.277l5.107.105a.25.25 0 0 0 .252-.21l.777-4.72a.25.25 0 0 0-.1-.244z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.043a.75.75 0 0 1 .75.75v8.172l7.772-2.525a.75.75 0 0 1 .463 1.427l-7.771 2.525 4.803 6.61a.75.75 0 1 1-1.214.883L12.5 14.272l-4.803 6.611a.75.75 0 1 1-1.214-.881l4.804-6.611-7.772-2.525a.75.75 0 1 1 .463-1.427l7.772 2.525V3.793a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadarChartOutline;
