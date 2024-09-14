import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoGenerateAiTwoTone = ({
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
      d="M10.282 20.482h6.437c2.631 0 4.281-1.863 4.281-4.5V8.019c0-2.637-1.642-4.5-4.281-4.5H7.283C4.643 3.518 3 5.381 3 8.018v4.963"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.947 13.026a9 9 0 0 1-2.63 1.651c-.85.336-1.562-.082-1.666-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.897-1.24 1.665-.916a8.8 8.8 0 0 1 2.63 1.65c.656.594.671 1.437 0 2.053"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.264 15.283-.114.308a4.24 4.24 0 0 1-2.506 2.51l-.308.114.308.114a4.24 4.24 0 0 1 2.506 2.51l.114.308.114-.308a4.24 4.24 0 0 1 2.506-2.51l.307-.114-.307-.114a4.24 4.24 0 0 1-2.506-2.51z"
    />
  </Svg>
);
export default IconlystVideoGenerateAiTwoTone;
