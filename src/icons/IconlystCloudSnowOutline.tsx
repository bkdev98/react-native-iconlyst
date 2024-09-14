import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSnowOutline = ({
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
      d="M8.152 5.614c.897-1.186 2.333-2.135 4.403-2.135s3.505.949 4.402 2.135a6.35 6.35 0 0 1 1.188 2.811c1.038.136 1.99.561 2.727 1.265.904.862 1.433 2.094 1.433 3.578a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.113-.388-1.94-.968-2.494-.587-.56-1.422-.889-2.392-.898a.75.75 0 0 1-.743-.75c0-.658-.27-1.723-.94-2.608-.648-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.97.01-1.804.337-2.391.898-.58.554-.968 1.381-.968 2.493 0 1.375.817 2.56 1.995 3.091a.75.75 0 0 1-.618 1.367 4.89 4.89 0 0 1-2.877-4.458c0-1.484.529-2.716 1.432-3.578.737-.704 1.69-1.13 2.727-1.265a6.35 6.35 0 0 1 1.188-2.811"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.553 13.117a.75.75 0 0 1 .75.75v1.678l1.543-.858a.75.75 0 0 1 .729 1.311l-1.477.821 1.476.82a.75.75 0 1 1-.728 1.312l-1.543-.857v1.677a.75.75 0 1 1-1.5 0v-1.677l-1.542.857a.75.75 0 1 1-.729-1.311l1.477-.82-1.477-.822a.75.75 0 0 1 .729-1.31l1.542.856v-1.677a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSnowOutline;
