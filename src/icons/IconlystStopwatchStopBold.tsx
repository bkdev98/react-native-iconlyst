import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchStopBold = ({
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
      d="m15.273 10.967-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06m-3.46-5.72c-4.5 0-8.16 3.66-8.16 8.16s3.66 8.16 8.16 8.16c.56 0 1.105-.06 1.632-.167.19-.038.284-.248.217-.429a3.4 3.4 0 0 1-.209-1.194v-1.82c0-1.8 1.33-3.16 3.1-3.16h1.94q.505.001.954.145c.182.058.386-.042.418-.23q.108-.64.108-1.305c0-4.5-3.66-8.16-8.16-8.16M9.707 3.815h4.208a.75.75 0 0 0 0-1.5H9.707a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.556 17.545c-.105 0-.35 0-.35.41v1.82c0 .41.245.41.35.41h1.94c.105 0 .35 0 .35-.41v-1.82c0-.41-.245-.41-.35-.41zm1.94 4.14h-1.94c-1.072 0-1.85-.803-1.85-1.91v-1.82c0-1.107.778-1.91 1.85-1.91h1.94c1.073 0 1.85.803 1.85 1.91v1.82c0 1.107-.777 1.91-1.85 1.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchStopBold;
