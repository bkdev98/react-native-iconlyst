import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBulksharp = ({
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
      d="M11.737 2.785c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m22.513 6.36-.647.379c-2.982 1.747-5.288 4.048-6.852 5.925a29 29 0 0 0-1.767 2.35 20 20 0 0 0-.552.868l-.025.044-.006.01v.001l-.216.381h-.872l-.223-.336-.002-.003-.01-.017a9 9 0 0 0-.242-.337c-.17-.23-.418-.551-.73-.912-.628-.729-1.485-1.587-2.44-2.191l-.635-.401.802-1.268.634.4c1.133.717 2.101 1.7 2.775 2.48q.245.284.44.53l.057-.086a30 30 0 0 1 1.86-2.474c1.634-1.96 4.067-4.397 7.246-6.258l.647-.38z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTickSquareBulksharp;
