import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatQuoteBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.362 3.34H7.24c-2.31 0-4.19 1.885-4.19 4.202v6.939c0 2.318 1.88 4.203 4.19 4.203h1.069c.502 0 .994.204 1.348.56l1.42 1.427c.329.328.763.508 1.224.508.462 0 .896-.18 1.222-.508l1.422-1.426a1.92 1.92 0 0 1 1.349-.561h1.068c2.309 0 4.189-1.885 4.189-4.203V7.54c0-2.316-1.88-4.201-4.19-4.201"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.553 14.915a5.82 5.82 0 0 0 2.212-3.195c.31-1.138.183-2.188-.358-2.958a2.665 2.665 0 0 0-2.858-1.024 2.6 2.6 0 0 0-1.798 1.787 2.7 2.7 0 0 0 2.467 3.486.8.8 0 0 0 .223-.022 4.3 4.3 0 0 1-.763.708.75.75 0 0 0 .875 1.218m-5.962 0a5.84 5.84 0 0 0 2.212-3.196c.309-1.14.18-2.19-.36-2.957a2.66 2.66 0 0 0-2.857-1.024 2.6 2.6 0 0 0-1.798 1.787 2.7 2.7 0 0 0 2.467 3.486.8.8 0 0 0 .222-.022 4.3 4.3 0 0 1-.763.708.75.75 0 0 0 .877 1.218m-.603-5.732q.135-.037.277-.037c.366 0 .742.181.95.478.277.392.327 1.012.14 1.702a4.3 4.3 0 0 1-.322.83.75.75 0 0 0-.707-.643 1.24 1.24 0 0 1-.857-.41 1.21 1.21 0 0 1-.242-1.153c.114-.385.39-.665.76-.767m5.963 0q.136-.037.277-.037c.366 0 .742.181.95.478.277.393.327 1.013.14 1.703a4.3 4.3 0 0 1-.322.827.75.75 0 0 0-.707-.64 1.24 1.24 0 0 1-.857-.41 1.21 1.21 0 0 1-.242-1.154c.114-.385.39-.665.76-.767"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatQuoteBulk;
