import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewShowOutline = ({
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
      d="M11.27 21.434h-3.4c-3.212 0-5.37-2.248-5.37-5.594V8.17c0-3.354 2.158-5.606 5.37-5.606h8.131c3.212 0 5.369 2.252 5.369 5.605v2.976a.75.75 0 1 1-1.5 0V8.17c0-2.493-1.518-4.105-3.869-4.105H7.872c-2.35 0-3.87 1.612-3.87 4.105v7.672c0 2.487 1.52 4.093 3.87 4.093h3.4a.75.75 0 0 1 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M9.031 21.435a.75.75 0 0 1-.75-.75V3.33a.75.75 0 1 1 1.5 0v17.356a.75.75 0 0 1-.75.75m5.835-9.5a.75.75 0 0 1-.75-.75V3.326a.75.75 0 1 1 1.5 0v7.86a.75.75 0 0 1-.75.747z"
    />
    <Path
      fill={props.color}
      d="M11.111 15.688h-7.86a.75.75 0 1 1 .001-1.5h7.859a.75.75 0 0 1 0 1.5m9.507-5.833H3.252a.75.75 0 0 1 0-1.5h17.364a.75.75 0 0 1 0 1.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.697 17.522c.223.533.516 1.03.87 1.484.982 1.289 2.302 2.02 3.737 2.02 1.094 0 2.123-.426 2.987-1.2q.31-.277.591-.615l.14-.174c.341-.441.64-.95.892-1.517l.025-.057a.7.7 0 0 0 .057-.211l.002-.023a.75.75 0 0 0-.05-.34 6.53 6.53 0 0 0-1.858-2.56l-.028-.026a4.27 4.27 0 0 0-5.514 0l-.025.023a6.57 6.57 0 0 0-1.86 2.551.76.76 0 0 0 .009.586q.012.03.025.058m1.484-.362a5.1 5.1 0 0 1 1.334-1.709 2.78 2.78 0 0 1 1.676-.654l.123-.002a2.74 2.74 0 0 1 1.6.514q.099.07.193.15a5.1 5.1 0 0 1 1.322 1.701c-.197.402-.423.75-.673 1.057a5 5 0 0 1-.649.642l-.023.02c-.541.42-1.149.646-1.78.646-.634 0-1.255-.238-1.8-.666a5 5 0 0 1-.703-.71 5.6 5.6 0 0 1-.62-.989"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.776 17.692c.144.14.336.219.537.218a.75.75 0 0 0 0-1.5h-.033a.734.734 0 0 0-.733.75c.004.2.086.392.23.532"
    />
  </Svg>
);
export default IconlystGalleryViewShowOutline;
