import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayBold = ({
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
      d="M16.494 19.463h-8.99a.75.75 0 0 0 0 1.5h8.99a.75.75 0 0 0 0-1.5M16.674 11.867a.75.75 0 0 1-.965 1.148l-1.912-1.604v1.2a.75.75 0 0 1-1.5 0V7.962a.75.75 0 0 1 1.5 0v1.19l1.912-1.604a.75.75 0 1 1 .965 1.148l-1.89 1.585zm-5.887.524h-.208v.38a.75.75 0 0 1-1.5 0v-.38H7.07a.748.748 0 0 1-.609-1.187l2.759-3.84a.748.748 0 0 1 1.359.438v3.09h.208a.75.75 0 0 1 0 1.5m6.184-9.36H7.028A4.534 4.534 0 0 0 2.5 7.561v5.451a4.534 4.534 0 0 0 4.528 4.53h9.943a4.535 4.535 0 0 0 4.529-4.53v-5.45a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.08 10.892v-.76l-.548.76z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4KDisplayBold;
