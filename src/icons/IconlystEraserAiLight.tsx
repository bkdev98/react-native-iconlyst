import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserAiLight = ({
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
      d="m14.417 4.426 2.917 2.917c1.02 1.02.935 2.374-.084 3.393l-7.216 7.217c-1.019 1.018-2.374 1.104-3.393.083L3.723 15.12c-1.02-1.02-.933-2.374.085-3.392l7.217-7.218c1.018-1.018 2.375-1.1 3.392-.084M7.268 8.26l6.229 6.23M18.317 14.924l.105.282a3.89 3.89 0 0 0 2.296 2.3l.282.104-.282.105a3.89 3.89 0 0 0-2.296 2.299l-.105.283-.104-.283a3.89 3.89 0 0 0-2.296-2.3l-.282-.104.282-.104a3.89 3.89 0 0 0 2.296-2.3zM13.497 20.297h.01"
    />
  </Svg>
);
export default IconlystEraserAiLight;
