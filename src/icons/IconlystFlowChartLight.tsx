import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowChartLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 6.634V5.102c0-.819.662-1.483 1.48-1.483h4.042A1.48 1.48 0 0 1 16 5.102v1.532a1.48 1.48 0 0 1-1.478 1.485h-4.043C9.662 8.119 9 7.454 9 6.634M3.5 19.134v-1.532c0-.819.662-1.483 1.48-1.483h4.042a1.48 1.48 0 0 1 1.478 1.483v1.532a1.48 1.48 0 0 1-1.478 1.485H4.979c-.817 0-1.479-.665-1.479-1.485M14.5 19.134v-1.532c0-.819.662-1.483 1.48-1.483h4.042a1.48 1.48 0 0 1 1.478 1.483v1.532a1.48 1.48 0 0 1-1.478 1.485h-4.043c-.817 0-1.479-.665-1.479-1.485"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 8.119v4M18 16.119v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"
    />
  </Svg>
);
export default IconlystFlowChartLight;
