import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="m15.416 13.52.071.007c.39.1.465.658.46 1.096-.018 1.272-.062 2.157-.13 2.704l-.047.451c-.045.456-.092.928-.226 1.432-.354 1.184-1.3 1.952-2.373 1.952h-.107c-.593 0-1.237-.357-1.603-.667l-1.3-1.006c-.494-.368-.349-.955-.071-1.295s4.647-4.32 4.79-4.462c.145-.141.463-.24.607-.205ZM13.15 3.418c1.059 0 2.033.742 2.382 1.928.138.496.19.995.233 1.47l.085.678c.02.158.042.296.053.487L6.29 17.593h-.222c-1.408 0-2.435-.995-2.626-2.54-.211-1.546-.169-4.192 0-5.6.202-1.461 1.281-2.467 2.626-2.467h1.831l3.494-2.859c.423-.358 1.175-.697 1.757-.709"
        opacity={0.4}
      />
      <Path d="M21.728 3.27a.926.926 0 0 0-1.308 0L3.27 20.42a.93.93 0 0 0 .004 1.313.96.96 0 0 0 .65.268c.24 0 .485-.1.656-.271L21.729 4.581a.927.927 0 0 0-.001-1.311" />
    </G>
  </Svg>
);
export default IconlystVolumeOffBulk;
