import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward30s2Outline = ({
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
      d="M5.34 4.586c.91-.976 2.203-1.52 3.725-1.52h7.67c1.525 0 2.819.544 3.728 1.52.903.97 1.37 2.307 1.37 3.8v7.227c0 1.494-.467 2.83-1.37 3.8-.91.976-2.204 1.52-3.73 1.52H9.065c-1.526 0-2.82-.544-3.728-1.52-.903-.97-1.37-2.306-1.37-3.8a.75.75 0 0 1 1.5 0c0 1.184.367 2.133.968 2.778.595.64 1.475 1.042 2.63 1.042h7.668c1.156 0 2.037-.403 2.632-1.042.601-.646.968-1.594.968-2.778V8.387c0-1.184-.367-2.133-.968-2.779-.595-.639-1.476-1.042-2.63-1.042h-7.67c-1.15 0-2.031.403-2.628 1.043-.602.646-.97 1.594-.97 2.778v3.73a.75.75 0 0 1-1.5 0v-3.73c0-1.495.47-2.831 1.373-3.801"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.554 9.935a.75.75 0 0 1 1.06 0l1.122 1.121 1.112-1.112a.75.75 0 0 1 1.06 1.06l-1.642 1.643a.75.75 0 0 1-1.06 0l-1.652-1.652a.75.75 0 0 1 0-1.06M8.813 10.71a2.097 2.097 0 1 1 3.705 1.349 2.098 2.098 0 1 1-3.706 1.348.75.75 0 0 1 1.5 0 .598.598 0 1 0 .599-.598.75.75 0 0 1 0-1.5.598.598 0 1 0-.598-.598.75.75 0 0 1-1.5 0M15.837 10.156a.82.82 0 0 0-.821.822v2.167a.821.821 0 1 0 1.642 0v-2.167a.82.82 0 0 0-.821-.822m-2.321.822a2.321 2.321 0 1 1 4.642 0v2.167a2.321 2.321 0 1 1-4.642 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward30s2Outline;
