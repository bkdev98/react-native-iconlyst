import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareSmartHandWatchAiOutline = ({
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
      fillRule="evenodd"
      d="M8.076 22a.75.75 0 0 1 .75-.75h6.348a.75.75 0 0 1 0 1.5H8.826a.75.75 0 0 1-.75-.75M8.076 2a.75.75 0 0 1 .75-.75h6.348a.75.75 0 0 1 0 1.5H8.826a.75.75 0 0 1-.75-.75M5.864 5.617C6.64 4.877 7.715 4.54 8.92 4.54h6.166c1.208 0 2.283.337 3.06 1.077.781.745 1.162 1.807 1.159 3.056l-.75-.001h.75v6.646c0 1.25-.383 2.312-1.165 3.058-.777.741-1.852 1.08-3.06 1.08H8.92c-1.21 0-2.285-.346-3.062-1.099-.78-.756-1.163-1.83-1.163-3.094V8.673c0-1.25.385-2.312 1.169-3.056m1.033 1.087c-.42.399-.702 1.029-.702 1.969v6.591c0 .96.285 1.608.707 2.017.426.413 1.088.676 2.018.676h6.16c.937 0 1.6-.26 2.024-.665.419-.4.7-1.032.7-1.973V8.67c.003-.94-.277-1.569-.694-1.967-.423-.403-1.085-.662-2.024-.662H8.92c-.935 0-1.598.259-2.023.663"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.422 15.78a.75.75 0 0 1-.704-.49l-.1-.272a3.01 3.01 0 0 0-1.78-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 1.407 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.782l-.1.274a.75.75 0 0 1-.704.49m.948-3.349a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.95.95c.363.268.683.588.95.95.267-.362.587-.682.948-.95M15.016 8.217a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareSmartHandWatchAiOutline;
