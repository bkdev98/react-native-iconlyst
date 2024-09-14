import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldEditBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.067 10.888c-.136-4.364-1.498-7.114-2.453-7.114s-2.316 2.75-2.452 7.114zM13.984 13.665c.04-.43.07-.88.08-1.35h-4.9c.12 3.86 1.2 6.46 2.11 7-.23-.95-.02-1.94.56-2.72zM15.494 10.885h.69a3.7 3.7 0 0 1 4.39-.1c-.37-4.23-3.7-7.63-7.9-8.13 1.74 1.03 2.71 4.56 2.82 8.23M10.559 2.657a9.016 9.016 0 0 0-7.92 8.232h5.099c.11-3.67 1.07-7.208 2.82-8.232M7.738 12.311H2.64a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.774 14.783-.44.6-1.68-1.235.44-.6a.44.44 0 0 1 .362-.182.44.44 0 0 1 .263.086l.96.708a.44.44 0 0 1 .095.623m-3.645 4.968a.1.1 0 0 1-.068.038l-1.227.056c-.06.004-.078-.026-.088-.065l-.298-1.262 2.319-3.16 1.68 1.234zm5.209-5.529a1.93 1.93 0 0 0-.771-1.27l-.96-.708a1.94 1.94 0 0 0-1.446-.356 1.93 1.93 0 0 0-1.275.773l-.877 1.195-.008.007-.004.01-2.757 3.757a1.58 1.58 0 0 0-.257 1.344l.312 1.187a1.596 1.596 0 0 0 1.535 1.184h.074l1.226-.058a1.59 1.59 0 0 0 1.206-.647l3.647-4.969c.308-.42.434-.934.355-1.449"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldEditBulk;
