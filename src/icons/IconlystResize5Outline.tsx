import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize5Outline = ({
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
      d="M4.472 4.47a.75.75 0 0 1 .532-.22l3.676.008a.75.75 0 0 1-.003 1.5l-1.86-.004 2.718 2.718a.75.75 0 1 1-1.06 1.061l-2.72-2.718.005 1.86a.75.75 0 1 1-1.5.004l-.008-3.677c0-.2.079-.391.22-.532M9.533 14.466a.75.75 0 0 1 0 1.06l-2.719 2.718 1.862-.003a.75.75 0 1 1 .003 1.5l-3.676.008a.75.75 0 0 1-.752-.791l.008-3.638a.75.75 0 0 1 1.5.003l-.004 1.86 2.717-2.717a.75.75 0 0 1 1.061 0M14.466 14.466a.75.75 0 0 1 1.06 0l2.719 2.718-.004-1.862a.75.75 0 0 1 1.5-.003l.008 3.677a.75.75 0 0 1-.752.752l-3.677-.009a.75.75 0 0 1 .004-1.5l1.86.005-2.718-2.717a.75.75 0 0 1 0-1.061M18.245 6.817l-.004 1.858a.75.75 0 1 0 1.5.003l.008-3.624a.75.75 0 0 0-.752-.804l-3.676.008a.75.75 0 1 0 .003 1.5l1.862-.004-2.718 2.718a.75.75 0 0 0 1.06 1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize5Outline;
