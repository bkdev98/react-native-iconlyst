import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardOutline = ({
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
      d="M3.77 5.195c.842-.904 2.04-1.406 3.444-1.406h10.071c1.407 0 2.605.502 3.448 1.407C21.57 6.094 22 7.33 22 8.706v6.587c0 1.376-.43 2.612-1.267 3.51-.843.905-2.041 1.407-3.449 1.407H7.214c-1.407 0-2.605-.502-3.448-1.407-.836-.898-1.266-2.134-1.266-3.51V8.705c0-1.376.432-2.611 1.27-3.51m1.097 1.023C4.33 6.793 4 7.64 4 8.705v6.588c0 1.067.33 1.914.864 2.488.529.568 1.313.929 2.35.929h10.07c1.038 0 1.822-.361 2.351-.929.535-.574.865-1.421.865-2.488V8.705c0-1.065-.33-1.913-.865-2.487-.529-.568-1.313-.929-2.35-.929H7.214c-1.032 0-1.817.36-2.347.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.832a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M6.677 15.168a.75.75 0 0 1 .75-.75h2.968a.75.75 0 0 1 0 1.5H7.427a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardOutline;
