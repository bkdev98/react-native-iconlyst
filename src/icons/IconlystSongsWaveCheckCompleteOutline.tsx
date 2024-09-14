import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCheckCompleteOutline = ({
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
      fillRule="evenodd"
      d="M21.78 14.438a.75.75 0 0 1 0 1.061l-3.853 3.854a.75.75 0 0 1-1.06 0l-1.542-1.541a.75.75 0 0 1 1.06-1.061l1.011 1.01 3.324-3.323a.75.75 0 0 1 1.06 0M19.938 9.162a.75.75 0 0 1 .75.75v1.771a.75.75 0 0 1-1.5 0v-1.77a.75.75 0 0 1 .75-.75M15.773 5.959a.75.75 0 0 1 .75.75v6.362a.75.75 0 1 1-1.5 0V6.71a.75.75 0 0 1 .75-.75M7.445 6.09a.75.75 0 0 1 .75.75v10.45a.75.75 0 0 1-1.5 0V6.84a.75.75 0 0 1 .75-.75M3.281 9.426a.75.75 0 0 1 .75.75v3.911a.75.75 0 0 1-1.5 0v-3.911a.75.75 0 0 1 .75-.75M11.61 3a.75.75 0 0 1 .75.75v16.499a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveCheckCompleteOutline;
