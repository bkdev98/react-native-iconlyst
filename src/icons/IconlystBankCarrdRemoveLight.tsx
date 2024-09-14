import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRemoveLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.141 15.484 3 19.626M7.141 19.626 3 15.484M3.05 11.815V8.53c0-2.435 1.516-4.155 3.953-4.155h10.044c2.43 0 3.953 1.72 3.953 4.155v6.57c0 2.434-1.516 4.155-3.953 4.155h-5.398M21 9.654H3.05"
    />
  </Svg>
);
export default IconlystBankCarrdRemoveLight;
