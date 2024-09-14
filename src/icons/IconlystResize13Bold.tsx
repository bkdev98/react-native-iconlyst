import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize13Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.725 7.261v.019l-.006 2.613a.75.75 0 0 1-.75.748h-.002a.75.75 0 0 1-.748-.752l.002-.797-1.56 1.559a.748.748 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.56-1.56-.796.002h-.002a.75.75 0 0 1-.002-1.5l2.612-.006h.018a.8.8 0 0 1 .277.059h.001a.7.7 0 0 1 .267.191.7.7 0 0 1 .13.206v.001q.015.035.027.071v.002q0 .001.001.002l.001.003.001.003v.002l.001.002.001.004v.001q-.001 0 .001.002l.001.002v.003a.7.7 0 0 1 .026.18m-.221 10.495-.001.001a.74.74 0 0 1-.53.22l-.04-.001-2.574-.005a.75.75 0 0 1 .002-1.5l.797.001-1.559-1.559a.75.75 0 0 1 1.06-1.061l1.561 1.561-.002-.797a.75.75 0 0 1 .748-.752h.002a.75.75 0 0 1 .75.748l.006 2.612a.75.75 0 0 1-.22.532m-7.102-7.105a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1.56-1.56.001.798a.75.75 0 0 1-.748.752h-.002a.75.75 0 0 1-.75-.749L6.278 7.28v-.021a.75.75 0 0 1 .203-.497l.034-.032.001-.001v-.001a.7.7 0 0 1 .224-.144l.001-.001q.028-.011.057-.021h.003l.002-.001.002-.001.003-.001h.002l.002-.001a.7.7 0 0 1 .2-.031h.019l2.612.006a.75.75 0 0 1-.002 1.5h-.002l-.796-.002 1.559 1.56a.75.75 0 0 1 0 1.06m-.001 4.258-1.56 1.56.797-.001h.002a.75.75 0 0 1 .002 1.5l-2.613.006h-.002a.75.75 0 0 1-.75-.748v-.007l.005-2.61a.75.75 0 0 1 .75-.748h.002a.75.75 0 0 1 .748.751l-.001.796 1.56-1.56a.749.749 0 1 1 1.06 1.061M15.974 2.75H8.026C4.721 2.75 2.5 4.873 2.5 8.033v8.435c0 3.159 2.221 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.033c0-3.16-2.221-5.283-5.526-5.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize13Bold;
