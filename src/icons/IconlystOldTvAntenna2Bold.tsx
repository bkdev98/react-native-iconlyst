import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2Bold = ({
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
      d="M18.64 12.029c-.41 0-.75-.33-.75-.74v-.01a.749.749 0 1 1 .75.75m0 2.89c-.41 0-.75-.33-.75-.74v-.01a.749.749 0 1 1 .75.75m0 2.89c-.41 0-.75-.33-.75-.74v-.01a.749.749 0 1 1 .75.75m-2.85-.81c0 .98-.8 1.78-1.78 1.78H6.4c-.98 0-1.78-.8-1.78-1.78v-5.66c0-.98.8-1.79 1.78-1.79h7.61c.98 0 1.78.81 1.78 1.79zm1.19-10.09h-3.35L17 3.889c.31-.27.34-.75.06-1.05a.747.747 0 0 0-1.06-.06l-4.05 3.62-3.93-3.62a.746.746 0 0 0-1.06.05c-.28.3-.26.78.04 1.06l3.29 3.02H7.03c-2.49 0-4.53 2.03-4.53 4.53v5.46c0 2.49 2.04 4.52 4.53 4.52h9.95c2.49 0 4.52-2.03 4.52-4.52v-5.46c0-2.5-2.03-4.53-4.52-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntenna2Bold;
