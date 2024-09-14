import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLitecoinBold = ({
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
      d="M14.381 16.16h-3.652a.75.75 0 0 1-.725-.941l.524-1.995-.734.176a.75.75 0 0 1-.35-1.459l1.517-.364.836-3.178a.75.75 0 0 1 1.451.382l-.631 2.399.664-.159a.75.75 0 1 1 .35 1.459l-1.447.347-.482 1.833h2.679a.75.75 0 0 1 0 1.5M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLitecoinBold;
