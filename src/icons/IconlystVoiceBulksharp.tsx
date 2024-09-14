import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBulksharp = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.495 13.229v-5.89h-1.5v5.89zM21.505 7.339v5.89h-1.5v-5.89zM13 16.839v4.39h2.72v1.5H8.78v-1.5h2.72v-4.39z" />
    </G>
    <Path
      fill={props.color}
      d="M12.25 2.479c-2.645 0-4.785 2.154-4.785 4.805v6c0 2.652 2.14 4.805 4.785 4.805s4.786-2.153 4.786-4.804v-6c0-2.652-2.14-4.806-4.786-4.806"
    />
  </Svg>
);
export default IconlystVoiceBulksharp;
