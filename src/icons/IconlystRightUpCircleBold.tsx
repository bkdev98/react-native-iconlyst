import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightUpCircleBold = ({
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
      d="m15.486 9.266-.008 4.276a.75.75 0 1 1-1.5-.003l.005-2.463-4.191 4.19a.75.75 0 1 1-1.061-1.061l4.191-4.189-2.46.005h-.002a.75.75 0 0 1-.002-1.5l4.273-.009h.005a1 1 0 0 1 .121.01h.005l.002.001h.002l.002.001h.003l.003.001h.003l.002.001h.003l.001.001h.003l.002.001h.002l.003.001a.7.7 0 0 1 .339.17 1 1 0 0 1 .067.068h.001a.75.75 0 0 1 .166.322v.003l.001.002v.004q.002 0 .001.002l.001.002v.003q.014.066.017.135zm3.23-3.983A9.43 9.43 0 0 0 11.999 2.5a9.44 9.44 0 0 0-6.717 2.783A9.44 9.44 0 0 0 2.5 11.999c0 2.538.988 4.924 2.782 6.718a9.44 9.44 0 0 0 6.717 2.783 9.43 9.43 0 0 0 6.717-2.783 9.44 9.44 0 0 0 2.784-6.718 9.43 9.43 0 0 0-2.784-6.716"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightUpCircleBold;
