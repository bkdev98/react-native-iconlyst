import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesPokerCardBulk = ({
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
      d="M15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 6.76a.75.75 0 0 0 .75-.75V6a.746.746 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75m-2.132 8.222a2.53 2.53 0 0 0 2.23-1.75 3.03 3.03 0 0 0 .035-1.838c-.223-.717-.678-1.376-1.307-1.896l-2.099-1.803a1.1 1.1 0 0 0-.72-.294h-.005q-.38 0-.72.289L9.08 9.58c-.58.52-.996 1.142-1.204 1.805a3.03 3.03 0 0 0 .1 2.02 2.5 2.5 0 0 0 1.593 1.474c.702.197 1.25.14 1.681-.015V16a.75.75 0 0 0 1.5 0V14.81a2.7 2.7 0 0 0 1.118.172M8 18.76a.75.75 0 0 0 .75-.75V18a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.755c0 .414.336.75.75.75m4.002-9.713 1.857 1.596c.42.348.703.75.841 1.193.088.284.08.61-.027.923a1.02 1.02 0 0 1-.906.724c-.462.044-.843-.233-1.164-.467l-.058-.042-.04-.03a.75.75 0 0 0-.499-.194.9.9 0 0 0-.449.14 7 7 0 0 0-.256.2c-.397.32-.66.532-1.312.347a1 1 0 0 1-.624-.598 1.55 1.55 0 0 1-.056-1.012c.125-.4.392-.79.76-1.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpadesPokerCardBulk;
