import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.053 2a4.43 4.43 0 0 1 4.425 4.425v11.139A4.44 4.44 0 0 1 17.042 22h-4.885a4.43 4.43 0 0 1-4.424-4.425v-.942a.75.75 0 0 1 1.5 0v.942a2.93 2.93 0 0 0 2.924 2.925h4.885a2.94 2.94 0 0 0 2.936-2.936V6.425A2.93 2.93 0 0 0 17.053 3.5h-4.885a2.94 2.94 0 0 0-2.935 2.934v.933a.75.75 0 0 1-1.5 0v-.933A4.44 4.44 0 0 1 12.168 2zm-3.66 6.553 2.928 2.917q.036.036.067.076l-.067-.077q.06.06.105.13l.02.034a1 1 0 0 1 .03.056l.015.042a1 1 0 0 1 .021.058l.011.047q.008.029.012.058 0 .013.002.027a1 1 0 0 1 .005.079l-.007.079v.023l-.002.005.01-.107q0 .083-.019.164l-.013.047a1 1 0 0 1-.019.058l-.018.041a1 1 0 0 1-.028.058l-.021.033a1 1 0 0 1-.037.055l-.027.031-.04.044-2.929 2.915a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l1.641-1.634H3.75a.75.75 0 0 1 0-1.5h10.225l-1.64-1.635a.749.749 0 1 1 1.057-1.062"
    />
  </Svg>
);
export default IconlystLoginOutline;
