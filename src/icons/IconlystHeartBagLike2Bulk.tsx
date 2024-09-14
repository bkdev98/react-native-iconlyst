import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike2Bulk = ({
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
      d="M7.13 5.918c-2.491.065-4.153 1.85-4.153 4.487v6.301c0 2.685 1.725 4.49 4.294 4.49H17.68c2.57 0 4.297-1.805 4.297-4.49v-6.301c0-2.686-1.727-4.489-4.296-4.489h-.566v.002z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.587 5.916h-8.22v-.14a2.974 2.974 0 0 1 2.97-2.971h2.28a2.974 2.974 0 0 1 2.97 2.97zm-5.25-1.611c-.811 0-1.47.66-1.47 1.47v.14h5.22v-.14c0-.81-.66-1.47-1.47-1.47zM17.502 18.775a.75.75 0 0 1-.735-.904 2.65 2.65 0 0 1 1.896-1.983.75.75 0 0 1 .372 1.453c-.388.1-.717.445-.8.838a.75.75 0 0 1-.733.596M7.45 18.775a.75.75 0 0 1-.732-.596 1.14 1.14 0 0 0-.8-.838.75.75 0 1 1 .372-1.453 2.65 2.65 0 0 1 1.896 1.983.75.75 0 0 1-.735.904M6.103 11.005a.75.75 0 0 1-.186-1.477c.389-.1.718-.443.801-.836A.75.75 0 1 1 8.186 9a2.65 2.65 0 0 1-1.896 1.982.8.8 0 0 1-.187.023M18.85 11.005a.8.8 0 0 1-.187-.023A2.65 2.65 0 0 1 16.767 9a.75.75 0 0 1 .58-.889.754.754 0 0 1 .888.581c.083.393.412.737.801.836a.75.75 0 0 1-.186 1.477M15.87 11.971a2.2 2.2 0 0 0-1.386-1.294 2.3 2.3 0 0 0-1.092-.078c-.335.056-.638.256-.893.443-.246-.179-.557-.383-.894-.44a2.35 2.35 0 0 0-1.09.075c-1.4.452-1.83 1.983-1.44 3.2.61 1.955 3.233 3.198 3.345 3.25a.19.19 0 0 0 .158 0c.11-.051 2.695-1.272 3.34-3.247a2.8 2.8 0 0 0-.048-1.909"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBagLike2Bulk;
